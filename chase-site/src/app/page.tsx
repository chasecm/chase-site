import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <main className="bg-black text-white">

      <div className="h-screen flex items-center justify-center">
        <Hero />
      </div>

      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold">What I Do</h2>

        <p className="mt-6 text-gray-400">
          I build scalable software systems, modernize legacy applications, 
          and design automation pipelines across frontend, backend, and cloud infrastructure.
        </p>
      </section>

    </main>
  )
}