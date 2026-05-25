const stats = [
  { value: "5+", label: "Years engineering" },
  { value: "10+", label: "Projects shipped" },
  { value: "4", label: "Domains" },
]

export function AboutPreview() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 grid grid-cols-3 gap-4 border-y border-white/[0.07] py-8 sm:gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.15em] text-white/35 sm:tracking-[0.18em]">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.26em] text-white/35">About</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Engineering with product taste and systems thinking.
          </h2>
        </div>

        <div className="space-y-6 leading-8 text-white/60">
          <p>
            My work sits at the intersection of application engineering, automation, and
            infrastructure. I like building software that feels sharp on the surface and remains
            dependable under the hood.
          </p>
          <p>
            I&apos;m especially drawn to projects involving modernization, delivery pipelines, API
            improvements, and turning brittle workflows into maintainable systems.
          </p>
        </div>
      </div>
    </section>
  )
}
