export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#060606]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-white/40">
            Chase McCreary
          </p>
          <nav className="flex flex-wrap gap-6">
            {(
              [
                ["About", "#about"],
                ["Work", "#work"],
                ["Contact", "#contact"],
                ["GitHub", "https://github.com/chasecm"],
                ["LinkedIn", "https://www.linkedin.com/in/chase-mccreary-9a5a78208/"],
              ] as const
            ).map(([label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="text-[0.65rem] uppercase tracking-[0.16em] text-white/35 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6">
          <p className="text-[0.62rem] text-white/25">
            &copy; {new Date().getFullYear()} Chase McCreary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
