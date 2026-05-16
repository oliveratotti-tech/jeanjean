"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Aprovados", href: "#aprovados" },
  { name: "Contato", href: "#contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappLink = "https://wa.me/5543991234567?text=Olá! Gostaria de informações sobre matrícula no Colégio Jean Piaget."

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="#inicio" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20JEAN%20PIAGET-7bbC4tXQ0LFLDNWmDWQmp3EQ6KmUOa.png"
              alt="Colégio Jean Piaget"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-xs font-medium text-primary-foreground/80 tracking-wide">COLÉGIO</span>
              <span className="block text-xl font-bold text-primary-foreground leading-tight">Jean Piaget</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <Link href="tel:+554332322778" className="flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors">
            <Phone className="h-4 w-4" />
            (43) 3232-2778
          </Link>
          <Button asChild className="bg-background hover:bg-background/90 text-foreground font-semibold">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Matricule-se
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="#inicio" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20JEAN%20PIAGET-7bbC4tXQ0LFLDNWmDWQmp3EQ6KmUOa.png"
                  alt="Colégio Jean Piaget"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-lg font-bold text-foreground">Jean Piaget</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-secondary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <Link href="tel:+554332322778" className="flex items-center gap-2 text-base font-semibold text-foreground">
                    <Phone className="h-5 w-5" />
                    (43) 3232-2778
                  </Link>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Matricule-se
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
