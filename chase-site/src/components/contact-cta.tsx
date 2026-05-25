export function ContactCTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-4xl border border-white/9 bg-linear-to-br from-white/7 to-white/2 p-10 md:p-14">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <p className="text-[0.65rem] uppercase tracking-[0.26em] text-white/35">Contact</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          If you&apos;re building something ambitious, I&apos;d love to hear about it.
        </h2>
        <p className="mt-6 max-w-xl leading-8 text-white/55">
          Whether it&apos;s a product, platform, modernization effort, or a new idea — I&apos;m
          always interested in meaningful technical work.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:chaseicy@yahoo.com"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            Email Me
          </a>
          <a
            href="https://github.com/chasecm"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            View GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chase-mccreary-9a5a78208/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
