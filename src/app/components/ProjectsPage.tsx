import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';
import ussProjectImage from 'figma:asset/d1faa9f3de7d8549ab59b65b5818ae070ed4b7d8.png';

interface ProjectsPageProps {
  onNavigate: (page: string, projectId?: string) => void;
}

const projects = [
  {
    id: 'simpy-afp',
    title: 'Simpy – MVP para AFP',
    description: 'Diseño de MVP para autogestión previsional en AFP Capital. Proceso completo de discovery, investigación de usuarios y diseño de interfaz centrado en simplicidad y claridad.',
    category: 'Fintech',
    tags: ['UX Research', 'Product Discovery', 'Mobile Design'],
    image: 'https://images.unsplash.com/photo-1613442301287-4fa478efd9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhcHAlMjBtb2JpbGUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwOTc3Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
  },
  {
    id: 'groowcity',
    title: 'Groowcity – Landing + Onboarding',
    description: 'Storytelling y contenido estratégico para plataforma de gestión. Diseño de experiencia de onboarding y landing page con foco en conversión y claridad de propuesta de valor.',
    category: 'SaaS',
    tags: ['UX Writing', 'Storytelling', 'Design Systems'],
    image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYXRmb3JtJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MDk3NzM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2023',
  },
  {
    id: 'leo-ai',
    title: 'Leo con IA – Hackathon OpenAI',
    description: 'Finalista en Hackathon OpenAI LATAM. Diseño de experiencia educativa potenciada con IA para mejorar la comprensión lectora en niños.',
    category: 'EdTech + IA',
    tags: ['IA', 'UX Research', 'Hackathon'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGVkdWNhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwOTc3Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
  },
  {
    id: 'nalia-ai',
    title: 'Nalia – Agente de IA',
    description: 'Diseño de experiencia conversacional (AX) para agente de IA en sector asegurador. Foco en empatía, claridad y diseño de diálogos naturales.',
    category: 'IA Conversacional',
    tags: ['AX', 'Conversational Design', 'Insurance'],
    image: 'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwaW50ZXJmYWNlJTIwY29udmVyc2F0aW9ufGVufDF8fHx8MTc2MDk3NzM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
  },
  {
    id: 'uss-app',
    title: 'USS – Rediseño App',
    description: 'Rediseño completo de Mi App y Mi Portal de la Universidad San Sebastián. Investigación profunda con +60 usuarios, proceso de doble diamante y marco de diseño centrado en el usuario. Resultado: mejora en App Store del puesto 21 al 9.',
    category: 'Educación',
    tags: ['UX Research', 'Mobile App', 'Design Thinking'],
    image: ussProjectImage,
    year: '2023',
  },
  {
    id: 'cencosud-wizard',
    title: 'Cencosud Wizard',
    description: 'Implementación de IA y Design Sprint para ecommerce interno. Facilitación de workshops y diseño de flujos optimizados para retail.',
    category: 'Retail + IA',
    tags: ['Design Sprint', 'IA', 'Workshop'],
    image: 'https://images.unsplash.com/photo-1705909770198-7e83c24e1616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDk3NzM5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2023',
  },
];

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground">
            Proyectos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Una selección de proyectos donde he liderado procesos de discovery, investigación, 
            diseño y validación en diversos sectores.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {project.year}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between group/btn"
                  onClick={() => {
                    if (project.id === 'uss-app') {
                      onNavigate('ussproject');
                    } else {
                      onNavigate('project-detail', project.id);
                    }
                  }}
                >
                  Ver proyecto completo
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 pt-12">
          <div className="space-y-2">
            <h2 className="text-3xl text-foreground">¿Tienes un proyecto en mente?</h2>
            <p className="text-muted-foreground">
              Conversemos sobre cómo puedo ayudarte a diseñar soluciones centradas en las personas.
            </p>
          </div>
          <Button 
            size="lg" 
            onClick={() => onNavigate('contact')}
            className="gap-2"
          >
            Contactar
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}