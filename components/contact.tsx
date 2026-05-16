import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const whatsappLink = "https://wa.me/5543991234567?text=Olá! Gostaria de informações sobre matrícula no Colégio Jean Piaget."

  return (
    <section id="contato" className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold leading-7 text-primary-foreground/80 uppercase tracking-wide">Contato</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Venha conhecer nossa escola
          </p>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
            Agende uma visita e conheça de perto a estrutura e a proposta pedagógica do Colégio Jean Piaget.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground">Endereço</h3>
                <p className="mt-1 text-primary-foreground/80">
                  Avenida Doutor Vacyr Gonçalves Pereira, 674<br />
                  Centro, Sertanópolis - PR<br />
                  CEP: 86170-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground">Telefone</h3>
                <p className="mt-1 text-primary-foreground/80">
                  <a href="tel:+554332322778" className="hover:underline">(43) 3232-2778</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground">E-mail</h3>
                <p className="mt-1 text-primary-foreground/80">
                  <a href="mailto:secretaria@jeanpiaget.net.br" className="hover:underline">secretaria@jeanpiaget.net.br</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground">Horário de Funcionamento</h3>
                <p className="mt-1 text-primary-foreground/80">
                  Segunda a Sexta: 7h às 18h<br />
                  Secretaria: 7h30 às 17h30
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 font-semibold text-lg px-8"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Fale Conosco pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="relative h-80 lg:h-auto min-h-[320px] rounded-2xl overflow-hidden border-4 border-background">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.844891283854!2d-51.0355!3d-23.0583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAzJzI5LjkiUyA1McKwMDInMDcuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Colégio Jean Piaget"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
