import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold">
          Chase McCreary
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          I design, build, and scale software systems — from frontend applications to cloud infrastructure.
        </p>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">
          What I Do
        </h2>

        <p className="mt-6 text-gray-400">
          I build scalable applications, modernize legacy systems, and design automation pipelines using cloud infrastructure, CI/CD, and microservices.
        </p>
      </section>

      {/* WORK */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">
          Selected Work
        </h2>

        <div className="mt-12 space-y-10">

          <div>
            <h3 className="text-xl font-semibold">
              Automation Framework (Cucumber + Selenium)
            </h3>
            <p className="text-gray-400 mt-2">
              Built a scalable automation framework enabling reliable test execution and improved CI/CD workflows.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              CI/CD Pipeline System
            </h3>
            <p className="text-gray-400 mt-2">
              Designed and implemented pipelines using Jenkins, Terraform, and Concourse for automated deployments.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Angular Modernization Project
            </h3>
            <p className="text-gray-400 mt-2">
              Migrated legacy applications to Angular with improved performance and monitoring.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}