import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Diferenciais } from "@/components/diferenciais"
import { Aprovados } from "@/components/aprovados"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Diferenciais />
      <Aprovados />
      <Contact />
      <Footer />
    </main>
  )
}
