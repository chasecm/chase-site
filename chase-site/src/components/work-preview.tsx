const projects = [
  {
    index: "01",
    title: "Angular Modernization",
    description:
      "Modernized a legacy image-viewing application by moving the front end to Angular and integrating improved observability.",
    tag: "Frontend / Modernization",
  },
  {
    index: "02",
    title: "Automation Framework",
    description:
      "Built a functional automation framework using Cucumber, Selenium, and Serenity to improve coverage and reliability.",
    tag: "QA Automation / Testing",
  },
  {
    index: "03",
    title: "CI/CD Pipeline System",
    description:
      "Designed deployment pipelines with Jenkins, Terraform, Concourse, and UDeploy to streamline environment provisioning and release workflows.",
    tag: "DevOps / Infrastructure",
  },
  {
    index: "04",
    title: "Microservices & Cloud",
    description:
      "Enhanced microservices and Lambda-based applications with API improvements, reduced latency, and workflow optimization.",
    tag: "Backend / AWS",
  },
]

export function WorkPreview() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.26em] text-white/35">Selected Work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built in real production environments.
          </h2>
        </div>
        <p className="max-w-sm leading-7 text-white/50">
          Modernization, automation, CI/CD, and infrastructure delivery — systems built to last.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:border-white/[0.16] hover:bg-white/[0.045]"
          >
            <div className="flex items-start justify-between">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-white/30">{project.tag}</p>
              <span className="font-mono text-[0.62rem] text-white/20">{project.index}</span>
            </div>
            <h3 className="mt-5 text-xl font-medium leading-snug text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/55">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
