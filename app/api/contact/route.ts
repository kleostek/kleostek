import { NextResponse } from "next/server";

const AIRTABLE_API_URL = "https://api.airtable.com/v0/";
const AIRTABLE_TABLE_NAME = "Solicitudes de proyectos";

function looksLikeBaseId(value: string | undefined) {
  return Boolean(value && /^app[a-z0-9]{10,}$/i.test(value));
}

function looksLikeApiKey(value: string | undefined) {
  if (!value) return false;
  const normalized = value.trim();
  return Boolean(
    normalized &&
      /^(pat|pata)[a-z0-9._-]{10,}$/i.test(normalized) &&
      !/reemplaza|tu_pat_real|placeholder|api_key_aqui/i.test(normalized)
  );
}

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(ip: string | null) {
  if (!ip) {
    return false;
  }

  const now = Date.now();
  const bucket = globalThis.__contactRateLimit?.get(ip);

  if (!bucket) {
    globalThis.__contactRateLimit = globalThis.__contactRateLimit || new Map<string, { count: number; resetAt: number }>();
    globalThis.__contactRateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (now > bucket.resetAt) {
    const rateLimitStore = globalThis.__contactRateLimit || new Map<string, { count: number; resetAt: number }>();
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    globalThis.__contactRateLimit = rateLimitStore;
    return false;
  }

  if (bucket.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  bucket.count += 1;
  return false;
}

declare global {
  var __contactRateLimit: Map<string, { count: number; resetAt: number }> | undefined;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip");

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." }, { status: 429 });
  }

  const payload = await request.json().catch(() => null);

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const { name, email, phone, subject, message, honey } = payload as {
    name?: unknown;
    email?: unknown;
    phone?: unknown;
    subject?: unknown;
    message?: unknown;
    honey?: unknown;
  };

  if (honey) {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();
  const trimmedSubject = subject.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedSubject || !trimmedMessage) {
    return NextResponse.json({ error: "Por favor completa todos los campos obligatorios." }, { status: 400 });
  }

  const emailRegex = /.+@.+\..+/i;
  const phoneRegex = /^[0-9+\-()\s]{7,15}$/;

  if (!emailRegex.test(trimmedEmail)) {
    return NextResponse.json({ error: "El correo electrónico no es válido." }, { status: 400 });
  }

  if (!phoneRegex.test(trimmedPhone)) {
    return NextResponse.json({ error: "El número de celular no es válido." }, { status: 400 });
  }

  const hasPlaceholderBaseId = typeof AIRTABLE_BASE_ID === "string" && /tu_base_id_aqui|your_base_id|replace_me/i.test(AIRTABLE_BASE_ID);
  const hasPlaceholderApiKey = typeof AIRTABLE_API_KEY === "string" && /your_api_key|replace_me|api_key_aqui|patreemplaza|pattu_token_real/i.test(AIRTABLE_API_KEY);

  if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY || hasPlaceholderBaseId || hasPlaceholderApiKey) {
    console.error("Airtable configuration missing or invalid for contact form submission.");
    return NextResponse.json(
      {
        error: "No se pudo procesar la solicitud en este momento.",
      },
      { status: 500 }
    );
  }

  const airtableResponse = await fetch(`${AIRTABLE_API_URL}${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Nombre: trimmedName,
            Telefono: trimmedPhone,
            "Correo Electronico": trimmedEmail,
            Asuno: trimmedSubject,
            "Descripcion Proyecto": trimmedMessage,
          },
        },
      ],
    }),
  });

  if (!airtableResponse.ok) {
    const errorText = await airtableResponse.text();
    console.error("Airtable submission failed.", errorText);

    return NextResponse.json(
      {
        error: "No se pudo guardar la solicitud en Airtable. Intenta de nuevo más tarde.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
