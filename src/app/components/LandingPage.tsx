import React from 'react';
import { Mail, Linkedin, FileDown, Briefcase, Users, Lightbulb, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Portada Editorial */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-foreground">
              Solange Meléndez Poblete
            </h1>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm">Product Designer</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">UX Researcher</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">Estratega de Contenidos UX</Badge>
            </div>
          </div>

          <p className="text-xl sm:text-2xl lg:text-3xl text-primary max-w-2xl mx-auto">
            Diseño productos con propósito, datos y empatía.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => onNavigate('projects')}
              className="gap-2"
            >
              <Briefcase className="w-5 h-5" />
              Ver Proyectos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="gap-2"
            >
              <Mail className="w-5 h-5" />
              Contacto
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <a 
              href="mailto:solange.melendezsole@gmail.com" 
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              solange.melendezsole@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/solange-melendez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              linkedin.com/in/solange-melendez
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground">Sobre mí</h2>
            <Separator className="w-24 mx-auto" />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            <p>
              Soy Product Designer con más de 8 años de experiencia creando soluciones digitales 
              centradas en las personas. He liderado procesos de discovery, investigación, diseño 
              y validación para organizaciones como AFP Capital, Universidad San Sebastián, 
              Cencosud y Groowcity.
            </p>
            <p>
              Combino diseño estratégico, contenidos UX, experiencia conversacional e integración de IA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl">Discovery</h3>
              <p className="text-sm text-muted-foreground">
                Liderazgo de procesos de investigación y validación
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl">Centrado en personas</h3>
              <p className="text-sm text-muted-foreground">
                Soluciones digitales con empatía y propósito
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl">Innovación</h3>
              <p className="text-sm text-muted-foreground">
                Integración de IA y experiencias conversacionales
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground">Experiencia</h2>
            <Separator className="w-24 mx-auto" />
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'AFP Capital',
                description: 'Diseño de MVP autogestión previsional',
                icon: '🏦',
              },
              {
                title: 'Universidad San Sebastián',
                description: 'Rediseño app (posición App Store: del 21 al 9)',
                icon: '🎓',
              },
              {
                title: 'Cencosud Wizard',
                description: 'IA + Design Sprint para ecommerce interno',
                icon: '🛒',
              },
              {
                title: 'Groowcity',
                description: 'Storytelling y contenido para plataforma de gestión',
                icon: '🌱',
              },
              {
                title: 'Agente de IA (AX)',
                description: 'Diseño de experiencia conversacional aseguradora',
                icon: '🤖',
              },
            ].map((project, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-l-4 border-primary">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{project.icon}</div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-2xl">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground">Habilidades & Herramientas</h2>
            <Separator className="w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl text-primary">Disciplinas</h3>
              <div className="flex flex-wrap gap-2">
                {['UX Research', 'Product Discovery', 'Design Systems', 'UX Writing'].map((skill) => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-primary">Herramientas</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Miro', 'Maze', 'Hotjar', 'Notion', 'Google Analytics'].map((tool) => (
                  <Badge key={tool} variant="outline">{tool}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-primary">Metodologías</h3>
              <div className="flex flex-wrap gap-2">
                {['Scrum', 'Kanban', 'Design Sprint'].map((method) => (
                  <Badge key={method} variant="outline">{method}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl text-primary">¿Diseñamos junt@s?</h2>
          
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
              className="gap-2"
            >
              <FileDown className="w-5 h-5" />
              Descargar CV
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a 
              href="mailto:solange.melendezsole@gmail.com" 
              className="hover:text-primary transition-colors"
            >
              solange.melendezsole@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/solange-melendez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
