const highlights = [
  "Full-stack engineering",
  "CI/CD & automation",
  "Cloud infrastructure",
  "Legacy modernization",
]

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[92vh] max-w-6xl items-center px-6 py-20">
      <div className="w-full max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[0.65rem] uppercase tracking-[0.22em] text-white/50">
            Software Engineer · Systems Builder
          </span>
        </div>

        <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[0.93] tracking-tight text-white">
          I design,
          <br />
          build, and
          <br />
          scale software.
        </h1>

        <div className="my-8 h-px w-14 bg-white/20" />

        <p className="max-w-2xl text-base leading-8 text-white/55 md:text-lg">
          Full-stack engineer focused on automation, cloud infrastructure, and modernizing systems
          from frontend experiences to deployment pipelines.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            View Selected Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Let&apos;s Connect
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-2.5">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/3 px-4 py-1.5 text-xs text-white/45"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
