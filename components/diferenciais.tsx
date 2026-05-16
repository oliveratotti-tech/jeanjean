import { GraduationCap, Heart, Shield } from "lucide-react"

const diferenciais = [
  {
    number: "1",
    title: "Qualidade de Ensino",
    icon: GraduationCap,
    description: "Uma base sólida é fundamental para o futuro das crianças. O Colégio Jean Piaget oferece um ensino de ponta, com metodologia moderna e eficaz que prepara os alunos para os desafios da vida.",
    highlights: ["Metodologia moderna", "Ensino de ponta", "Preparação para o futuro"],
  },
  {
    number: "2",
    title: "Valores e Ambiente Familiar",
    icon: Heart,
    description: "Mais do que educar, é preciso formar cidadãos. Aqui no Jean Piaget, cultivamos o respeito, a empatia e a responsabilidade desde cedo, mantendo sempre os princípios familiares que fazem a diferença na formação do caráter.",
    highlights: ["Formação de cidadãos", "Respeito e empatia", "Princípios familiares"],
  },
  {
    number: "3",
    title: "Estrutura e Acompanhamento",
    icon: Shield,
    description: "Ambiente acolhedor, salas bem equipadas, segurança e acompanhamento pedagógico individualizado. Tudo isso para garantir que cada aluno cresça e aprenda com confiança.",
    highlights: ["Ambiente acolhedor", "Segurança", "Acompanhamento individualizado"],
  },
]

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold leading-7 text-primary uppercase tracking-wide">Nossos Diferenciais</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Por que escolher o Colégio Jean Piaget?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Na hora de escolher o colégio ideal para os seus filhos, alguns pontos fazem toda a diferença!
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8">
            {diferenciais.map((item) => (
              <div 
                key={item.number} 
                className="relative bg-background rounded-2xl border-2 border-foreground overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              >
                <div className="bg-foreground text-background px-6 py-3">
                  <h3 className="text-lg font-bold uppercase tracking-wide">
                    {item.number}. {item.title}
                  </h3>
                </div>
                <div className="bg-primary p-6 lg:p-8">
                  <p className="text-primary-foreground text-lg leading-relaxed">
                    {item.description.split(/(\bfundamental\b|\bensino de ponta\b|\bdesafios da vida\b|\beducar\b|\bformar cidadãos\b|\bJean Piaget\b|\bresponsabilidade\b|\bprincípios familiares\b|\bcaráter\b|\bacolhedor\b|\bsegurança\b|\bgarantir\b|\bconfiança\b)/gi).map((part, i) => {
                      const boldWords = ['fundamental', 'ensino de ponta', 'desafios da vida', 'educar', 'formar cidadãos', 'jean piaget', 'responsabilidade', 'princípios familiares', 'caráter', 'acolhedor', 'segurança', 'garantir', 'confiança']
                      if (boldWords.includes(part.toLowerCase())) {
                        return <strong key={i} className="font-bold">{part}</strong>
                      }
                      return part
                    })}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span 
                        key={highlight} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-background/20 text-primary-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
