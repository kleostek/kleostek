import Link from "next/link";

export const metadata = {
  title: "Política de Tratamiento de Datos Personales | Kleostek",
  description: "Política de tratamiento de datos personales de Kleostek para el formulario de contacto.",
};

export default function PoliticaTratamientoDatosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-20 md:px-8 lg:px-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Kleostek
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Política de Tratamiento de Datos Personales
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            En Kleostek valoramos la confidencialidad y la protección de sus datos personales. Esta política explica de manera clara cómo recopilamos, usamos, conservamos y protegemos la información que usted nos proporciona a través del formulario de contacto.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(59,130,246,0.08)] backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">1. Responsable del tratamiento</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            El responsable del tratamiento de sus datos personales es Kleostek, con correo de contacto: <a href="mailto:kleostek@gmail.com" className="text-primary hover:underline">kleostek@gmail.com</a>.
          </p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold">2. Datos personales que recolectamos</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Cuando usted diligencia el formulario de contacto, podemos recolectar los siguientes datos:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Nombre</li>
              <li>Correo electrónico</li>
              <li>Número de celular</li>
              <li>Asunto</li>
              <li>Mensaje</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Finalidades del tratamiento</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Sus datos personales serán usados para las siguientes finalidades:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Responder solicitudes de contacto y consultas recibidas.</li>
              <li>Enviar cotizaciones o información comercial relacionada con su solicitud.</li>
              <li>Dar seguimiento comercial y atender sus requerimientos de manera oportuna.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Tiempo de conservación</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Los datos personales serán conservados durante el tiempo necesario para atender su solicitud, cumplir con las obligaciones legales aplicables y, en su caso, gestionar el seguimiento comercial correspondiente. Una vez finalizado ese periodo, se eliminarán de forma segura o se conservarán de acuerdo con la normatividad vigente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Compartición con terceros</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Kleostek no comparte sus datos personales con terceros con fines comerciales. Solo podrá compartirlos cuando exista una obligación legal, una solicitud de autoridad competente o un requerimiento aplicable conforme a la ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Derechos del titular</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Usted tiene derecho a conocer, actualizar, corregir o suprimir sus datos personales, así como a revocar la autorización otorgada cuando sea procedente. Para ejercer estos derechos, puede comunicarse con Kleostek al correo <a href="mailto:kleostek@gmail.com" className="text-primary hover:underline">kleostek@gmail.com</a> y especificar claramente su solicitud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Consentimiento</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Al enviar su mensaje a través del formulario, usted autoriza el tratamiento de sus datos para las finalidades descritas en esta política. Este consentimiento no cubre finalidades adicionales distintas a las aquí indicadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Uso futuro para marketing</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Si en el futuro Kleostek desea usar estos datos para actividades de marketing, newsletters, campañas o finalidades similares, esa finalidad adicional deberá incorporarse de manera explícita en esta política y en la autorización del formulario, sin asumirla ni activarla por defecto.
            </p>
          </section>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/" className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary">
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
