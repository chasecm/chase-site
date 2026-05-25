export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[#060606]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/80 transition hover:text-white"
        >
          Chase McCreary
        </a>

        <nav className="flex items-center gap-6 md:gap-8">
          {(["About", "Work", "Contact"] as const).map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-[0.65rem] uppercase tracking-[0.14em] text-white/45 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
