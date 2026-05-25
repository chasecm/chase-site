import { Hero } from "@/components/hero"

const projects = [
  {
    title: "Angular Modernization",
    description:
      "Modernized a legacy image-viewing application by moving the front end to Angular and integrating improved observability.",
    tag: "Frontend / Modernization",
  },
  {
    title: "Automation Framework",
    description:
      "Built a functional automation framework using Cucumber, Selenium, and Serenity to improve coverage and reliability.",
    tag: "QA Automation / Testing",
  },
  {
    title: "CI/CD Pipeline System",
    description:
      "Designed deployment pipelines with Jenkins, Terraform, Concourse, and UDeploy to streamline environment provisioning and release workflows.",
    tag: "DevOps / Infrastructure",
  },
  {
    title: "Microservices & Cloud Improvements",
    description:
      "Enhanced microservices and Lambda-based applications with API improvements, reduced latency, and workflow optimization.",
    tag: "Backend / AWS",
  },
];

const highlights = [
  "Full-stack engineering",
  "CI/CD & automation",
  "Cloud infrastructure",
  "Legacy modernization",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060606] text-white selection:bg-white selection:text-black">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.08]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060606]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-[0.2em] text-white/90 uppercase">
            Chase McCreary
          </a>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex min-h-[92vh] max-w-6xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/60">
            Software Engineer • Systems Builder
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            I design, build, and scale software systems.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Full-stack engineer focused on automation, cloud infrastructure, and modernizing systems
            from frontend experiences to deployment pipelines.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
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
              Let’s Connect
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/40">About</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering with product taste and systems thinking.
            </h2>
          </div>

          <div className="space-y-6 text-white/65 leading-8">
            <p>
              My work sits at the intersection of application engineering, automation, and
              infrastructure. I like building software that feels sharp on the surface and remains
              dependable under the hood.
            </p>
            <p>
              I’m especially drawn to projects involving modernization, delivery pipelines, API
              improvements, and turning brittle workflows into maintainable systems.
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/40">Selected Work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built in real production environments.
            </h2>
          </div>

          <p className="max-w-xl text-white/55 leading-7">
            Work shaped by application modernization, automation, CI/CD, and infrastructure
            delivery. The goal is always the same: systems that are cleaner, faster, and easier to
            maintain.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">{project.tag}</p>
              <h3 className="mt-4 text-2xl font-medium text-white">{project.title}</h3>
              <p className="mt-4 leading-8 text-white/60">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-10 md:p-14">
          <p className="text-sm uppercase tracking-[0.24em] text-white/40">Contact</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            If you’re building something ambitious, I’d love to hear about it.
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-white/60">
            Whether it’s a product, platform, modernization effort, or a new idea you want to bring
            to life, I’m always interested in meaningful technical work.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
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
          </div>
        </div>
      </section>
    </main>
  );
}