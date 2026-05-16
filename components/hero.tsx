"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  const whatsappLink = "https://wa.me/5543991234567?text=Olá! Gostaria de informações sobre matrícula no Colégio Jean Piaget."

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        {/* Animated Blobs */}
        <div className="absolute top-10 -left-20 w-72 h-72 bg-orange-200/50 rounded-full animate-blob" />
        <div className="absolute top-20 -right-20 w-80 h-80 bg-amber-200/50 rounded-full animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-orange-100/60 rounded-full animate-blob animation-delay-4000" />
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-yellow-200/40 rounded-full animate-blob animation-delay-6000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-8 lg:pt-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Logo completa com nome */}
            <div className="flex justify-center lg:justify-start mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20com%20nome-6bxjlQY6oYPw1PBaKLIgMBVpMIAcLM.png"
                alt="Colégio Jean Piaget"
                width={800}
                height={300}
                className="h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-auto max-w-full object-contain"
                style={{ marginTop: '-2rem', marginBottom: '-2rem' }}
                priority
              />
            </div>
            
            <p className="text-xl sm:text-2xl lg:text-2xl text-foreground font-medium text-balance leading-relaxed">
              Escola que apoia nos caminhos de aprendizados da vida e nas conquistas do futuro.
            </p>
            
            <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-lg">
              Educação de qualidade desde a educação infantil até o ensino médio, formando cidadãos preparados para os desafios da vida.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 rounded-full"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Matricule-se Agora
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 rounded-full"
              >
                <a href="#sobre">
                  Saiba Mais
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative max-w-md lg:max-w-lg mx-auto">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/562966408_18171545257364687_7115131382311924484_n-xSY0s4oYLQctxEIEJ45tb4ms4jso85.jpg"
                  alt="Alunos do Colégio Jean Piaget"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-xl p-4 shadow-lg z-20">
                <p className="text-sm font-medium text-foreground">Mais de</p>
                <p className="text-3xl font-bold text-primary">30 anos</p>
                <p className="text-sm text-muted-foreground">de tradição</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
