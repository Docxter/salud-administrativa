export function Build() {
  return (
    <section className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-slate-900/45 p-6 text-white shadow-2xl backdrop-blur-xl md:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-emerald-400/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
            Próximamente
          </span>

          <h1 className="mt-6 text-balance text-3xl font-black leading-tight md:text-5xl">
            SALUD ADMINISTRATIVA{" "}
            <span className="text-emerald-300 drop-shadow-sm">+</span>
          </h1>

          <p className="mt-4 max-w-2xl text-balance text-base text-slate-200 md:text-lg">
            Estamos construyendo una plataforma más robusta para la gestión
            administrativa en salud: más rápida, más clara y enfocada en
            resultados.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300">
              Solicitar acceso anticipado
            </button>
            <button className="rounded-xl border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
              Conocer funcionalidades
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-center">
              <p className="text-xs uppercase tracking-wider text-slate-300">
                Estado
              </p>
              <p className="mt-1 font-semibold text-emerald-200">
                En desarrollo
              </p>
            </div>
            <div className="rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-center">
              <p className="text-xs uppercase tracking-wider text-slate-300">
                Enfoque
              </p>
              <p className="mt-1 font-semibold text-emerald-200">Usabilidad</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-center">
              <p className="text-xs uppercase tracking-wider text-slate-300">
                Objetivo
              </p>
              <p className="mt-1 font-semibold text-emerald-200">
                Más eficiencia
              </p>
            </div>
          </div>
        </div>

        <aside className="rounded-2xl border border-white/20 bg-black/25 p-5 md:p-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
            Qué encontrarás
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              📊 Panel de indicadores administrativos en tiempo real.
            </li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              📁 Gestión de documentación y procesos centralizada.
            </li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              ✅ Flujos de aprobación con trazabilidad por usuario.
            </li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              🔔 Alertas clave para evitar retrasos operativos.
            </li>
          </ul>

          <p className="mt-5 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-3 py-3 text-sm text-emerald-100">
            ¿Quieres que te notifiquemos en el lanzamiento? Estamos abriendo
            cupos para pruebas tempranas.
          </p>
        </aside>
      </div>
    </section>
  );
}
