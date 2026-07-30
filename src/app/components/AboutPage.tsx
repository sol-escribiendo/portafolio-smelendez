import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Mail, Linkedin, Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header con foto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="aspect-square w-full max-w-xs mx-auto overflow-hidden rounded-2xl bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1641886336879-340cc977163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA4ODY5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Solange Meléndez Poblete"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl tracking-tight text-foreground">
                Solange Meléndez Poblete
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default" className="px-3 py-1">Product Designer</Badge>
                <Badge variant="default" className="px-3 py-1">UX Researcher</Badge>
                <Badge variant="default" className="px-3 py-1">Estratega de Contenidos</Badge>
              </div>
            </div>

            <p className="text-xl text-primary">
              Diseño productos con propósito, datos y empatía.
            </p>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Soy Product Designer con más de 8 años de experiencia creando soluciones digitales 
                centradas en las personas. He liderado procesos de discovery, investigación, diseño 
                y validación para organizaciones como <span className="text-foreground">AFP Capital</span>, 
                <span className="text-foreground"> Universidad San Sebastián</span>, 
                <span className="text-foreground"> Cencosud</span> y <span className="text-foreground">Groowcity</span>.
              </p>
              <p>
                Combino diseño estratégico, contenidos UX, experiencia conversacional e integración de IA 
                para crear productos que realmente impactan en la vida de las personas.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="default" className="gap-2">
                <Download className="w-4 h-4" />
                Descargar CV
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => onNavigate('contact')}
              >
                <Mail className="w-4 h-4" />
                Contactar
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Experiencia Detallada */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-foreground">
            Experiencia Profesional
          </h2>

          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl">AFP Capital</h3>
                    <p className="text-sm text-muted-foreground">Diseño de MVP autogestión previsional</p>
                  </div>
                  <p className="text-muted-foreground">
                    Lideré el proceso completo de discovery y diseño para un MVP de autogestión previsional. 
                    Realicé investigación de usuarios, definición de arquitectura de información y diseño de 
                    interfaces centradas en simplicidad para usuarios no familiarizados con términos previsionales.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">UX Research</Badge>
                    <Badge variant="secondary" className="text-xs">Product Discovery</Badge>
                    <Badge variant="secondary" className="text-xs">Fintech</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl">Universidad San Sebastián</h3>
                    <p className="text-sm text-muted-foreground">Rediseño app móvil</p>
                  </div>
                  <p className="text-muted-foreground">
                    Rediseño completo de la aplicación móvil institucional. A través de research profundo, 
                    testing continuo y iteraciones basadas en datos, logramos mejorar la posición en 
                    App Store del puesto 21 al 9.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Mobile Design</Badge>
                    <Badge variant="secondary" className="text-xs">Testing</Badge>
                    <Badge variant="secondary" className="text-xs">Education</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl">Cencosud Wizard</h3>
                    <p className="text-sm text-muted-foreground">IA + Design Sprint para ecommerce interno</p>
                  </div>
                  <p className="text-muted-foreground">
                    Facilitación de Design Sprint para implementación de IA en plataforma de ecommerce interno. 
                    Diseño de flujos optimizados y workshops con equipos multidisciplinarios.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Design Sprint</Badge>
                    <Badge variant="secondary" className="text-xs">IA</Badge>
                    <Badge variant="secondary" className="text-xs">Retail</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl">Groowcity</h3>
                    <p className="text-sm text-muted-foreground">Storytelling y contenido para plataforma de gestión</p>
                  </div>
                  <p className="text-muted-foreground">
                    Diseño de experiencia de contenido y storytelling para plataforma SaaS de gestión. 
                    Creación de landing page, onboarding y contenidos UX enfocados en conversión.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">UX Writing</Badge>
                    <Badge variant="secondary" className="text-xs">Storytelling</Badge>
                    <Badge variant="secondary" className="text-xs">SaaS</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl">Agente de IA (AX) – Nalia</h3>
                    <p className="text-sm text-muted-foreground">Diseño de experiencia conversacional aseguradora</p>
                  </div>
                  <p className="text-muted-foreground">
                    Diseño de experiencia conversacional (AX) para agente de IA en sector seguros. 
                    Foco en empatía, claridad y diseño de diálogos naturales que generen confianza.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">AX Design</Badge>
                    <Badge variant="secondary" className="text-xs">Conversational AI</Badge>
                    <Badge variant="secondary" className="text-xs">Insurance</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Separator />

        {/* Skills & Tools */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-foreground">
            Habilidades & Herramientas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 space-y-4">
              <h3 className="text-xl text-primary">Disciplinas</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'UX Research',
                  'Product Discovery',
                  'Design Systems',
                  'UX Writing',
                  'Conversational Design',
                  'IA Integration',
                ].map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-xl text-primary">Herramientas</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Figma',
                  'Miro',
                  'Maze',
                  'Hotjar',
                  'Notion',
                  'Google Analytics',
                  'FigJam',
                  'Optimal Workshop',
                ].map((tool) => (
                  <Badge key={tool} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-xl text-primary">Metodologías</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Scrum',
                  'Kanban',
                  'Design Sprint',
                  'Lean UX',
                  'Design Thinking',
                  'Jobs to be Done',
                ].map((method) => (
                  <Badge key={method} variant="outline" className="text-xs">
                    {method}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <Separator />

        {/* Contacto */}
        <div className="text-center space-y-6 py-8">
          <h2 className="text-3xl text-primary">¿Conversamos?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estoy disponible para colaboraciones, proyectos freelance o posiciones full-time. 
            Escribeme y conversemos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="gap-2"
            >
              <Mail className="w-5 h-5" />
              Contactar
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a 
                href="https://linkedin.com/in/solange-melendez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-2 flex items-center"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}