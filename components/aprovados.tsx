import Image from "next/image"
import { Trophy } from "lucide-react"

const aprovados = [
  {
    nome: "Geovana",
    curso: "Fisioterapia",
    universidade: "UniFil",
    posicao: "1º Lugar",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/573011295_18174347866364687_8782768428236051893_n-GhvBhZVWEe2MKjqvxCoeVLCZo41WAp.jpg",
  },
  {
    nome: "João Victor",
    curso: "Ciências Contábeis",
    universidade: "UniFil",
    posicao: "2º Lugar",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/573685849_18174347875364687_5679931538158954550_n-bRjftPOWaMfPZjpikXs1T49x0oqAFt.jpg",
  },
  {
    nome: "João Victor",
    curso: "Múltiplas Aprovações",
    universidade: "UEL, UENP, UniFil",
    posicao: "Aprovado",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/587946017_18178846060364687_3588211250646307314_n-BCXpHUFEk7bq7eOUZaWqWXvBp4Fug1.jpg",
  },
]

export function Aprovados() {
  return (
    <section id="aprovados" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-sm font-semibold leading-7 text-primary uppercase tracking-wide">Nossos Aprovados</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            O sucesso dos nossos alunos é a nossa maior conquista
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Confira alguns dos nossos alunos que conquistaram vagas nas melhores universidades da região.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {aprovados.map((aluno, index) => (
            <div 
              key={index} 
              className="group relative bg-secondary/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={aluno.imagem}
                  alt={`${aluno.nome} - Aprovado em ${aluno.curso}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground mb-2">
                    {aluno.posicao}
                  </span>
                  <h3 className="text-2xl font-bold">{aluno.nome}</h3>
                  <p className="text-lg font-medium text-background/90">{aluno.curso}</p>
                  <p className="text-sm text-background/70">{aluno.universidade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-8 py-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20JEAN%20PIAGET-7bbC4tXQ0LFLDNWmDWQmp3EQ6KmUOa.png"
              alt="Mascote Jean Piaget"
              width={56}
              height={56}
              className="h-14 w-auto"
            />
            <p className="text-lg font-semibold text-foreground">
              Faça parte dessa história de sucesso!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
