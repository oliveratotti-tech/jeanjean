import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="#inicio" className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20JEAN%20PIAGET-7bbC4tXQ0LFLDNWmDWQmp3EQ6KmUOa.png"
                alt="Colégio Jean Piaget"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <div>
                <span className="text-xs font-medium text-background/70 tracking-wide">COLÉGIO</span>
                <span className="block text-2xl font-bold text-background leading-tight">Jean Piaget</span>
              </div>
            </Link>
            <p className="mt-4 text-background/70 max-w-md">
              Escola que apoia nos caminhos de aprendizados da vida e nas conquistas do futuro. 
              Educação de qualidade em Sertanópolis desde 1990.
            </p>
            <div className="mt-6 flex gap-4">
              <a 
                href="https://instagram.com/colegio.jeanpiaget" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wide">Links Rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#inicio" className="text-background/70 hover:text-primary transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#sobre" className="text-background/70 hover:text-primary transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link href="#diferenciais" className="text-background/70 hover:text-primary transition-colors">Diferenciais</Link>
              </li>
              <li>
                <Link href="#aprovados" className="text-background/70 hover:text-primary transition-colors">Aprovados</Link>
              </li>
              <li>
                <Link href="#contato" className="text-background/70 hover:text-primary transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wide">Contato</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="tel:+554332322778" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  (43) 3232-2778
                </a>
              </li>
              <li>
                <a href="mailto:secretaria@jeanpiaget.net.br" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  secretaria@jeanpiaget.net.br
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-background/70">
              Av. Dr. Vacyr Gonçalves Pereira, 674<br />
              Centro, Sertanópolis - PR<br />
              CEP: 86170-000
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            &copy; {currentYear} Colégio Jean Piaget. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
