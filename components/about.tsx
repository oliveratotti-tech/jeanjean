import { BookOpen, Users, Award, Heart } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Educação Completa",
    description: "Da educação infantil ao ensino médio, oferecemos uma formação completa e de qualidade.",
  },
  {
    icon: Users,
    title: "Turmas Reduzidas",
    description: "Acompanhamento pedagógico individualizado para cada aluno desenvolver seu potencial.",
  },
  {
    icon: Award,
    title: "Aprovações em Vestibulares",
    description: "Nossos alunos conquistam vagas nas melhores universidades da região.",
  },
  {
    icon: Heart,
    title: "Ambiente Acolhedor",
    description: "Um espaço onde cada criança se sente segura para aprender e crescer.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold leading-7 text-primary uppercase tracking-wide">Sobre Nós</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Uma escola que faz a diferença na vida dos seus filhos
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            O Colégio Jean Piaget é uma instituição comprometida com a excelência educacional, 
            oferecendo ensino de qualidade em um ambiente acolhedor e seguro em Sertanópolis.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="relative bg-secondary/50 rounded-2xl p-6 hover:bg-secondary transition-colors">
                <dt className="flex items-center gap-4 text-base font-semibold leading-7 text-foreground">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-4 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-muted-foreground max-w-3xl mx-auto">
            {'"Tenha em mente que tudo que você aprende na escola é trabalho de muitas gerações. Receba essa herança, honre-a, acrescente a ela e, um dia, fielmente, deposite-a nas mãos de seus filhos."'}
          </blockquote>
          <cite className="mt-4 block text-sm font-semibold text-foreground">— Albert Einstein</cite>
        </div>
      </div>
    </section>
  )
}
