import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ussProjectImage from 'figma:asset/d1faa9f3de7d8549ab59b65b5818ae070ed4b7d8.png';

interface ProjectDetailProps {
  projectId: string;
  onNavigate: (page: string) => void;
}

export function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const projectData: Record<string, any> = {
    'simpy-afp': {
      title: 'Simpy – MVP para AFP',
      subtitle: 'Diseño de MVP para autogestión previsional',
      client: 'AFP Capital',
      duration: '3 meses',
      role: 'Product Designer & UX Researcher',
      team: 'UX Designer, UI Designer, PO, 2 Developers',
      hero: 'https://images.unsplash.com/photo-1613442301287-4fa478efd9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhcHAlMjBtb2JpbGUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwOTc3Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['UX Research', 'Product Discovery', 'Mobile Design', 'Fintech'],
      overview: 'Es una solución digital creada para facilitar el traspaso de productos previsionales obligatorios y voluntarios, sin la necesidad de un ejecutivo en línea. Mi rol fue diseñar la experiencia completa desde login hasta la confirmación del traspaso, considerando seguridad, claridad y eficiencia en cada paso del proceso.',
      challenge: 'Los usuarios encontraban los términos previsionales confusos y el proceso intimidante. Necesitaban una solución simple y confiable para gestionar sus ahorros sin asistencia humana.',
      solution: 'Realicé investigación profunda de usuarios, simplificando el lenguaje y creando una arquitectura de información clara. Diseñé flujos step-by-step con validaciones en tiempo real y feedback constante.',
      results: [
        'Reducción del 70% en consultas a ejecutivos',
        'Aumento del 85% en completitud de traspasos',
        'NPS de 8.5/10 en primeros usuarios',
        'Tiempo promedio de traspaso: 5 minutos'
      ],
      images: [
        'https://images.unsplash.com/photo-1613442301287-4fa478efd9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhcHAlMjBtb2JpbGUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwOTc3Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1641886336879-340cc977163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA4ODY5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1705909770198-7e83c24e1616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDk3NzM5MHww&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    'groowcity': {
      title: 'Groowcity – Landing + Onboarding',
      subtitle: 'Storytelling y contenido para plataforma de gestión',
      client: 'Groowcity',
      duration: '2 meses',
      role: 'UX Writer & Content Strategist',
      team: 'UX Writer, UI Designer, Marketing, Developers',
      hero: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYXRmb3JtJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MDk3NzM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['UX Writing', 'Storytelling', 'Design Systems', 'SaaS'],
      overview: 'Diseño de experiencia de contenido y storytelling para plataforma SaaS de gestión. Creación de landing page con propuesta de valor clara y onboarding enfocado en conversión y adopción.',
      challenge: 'La propuesta de valor no era clara y los usuarios no entendían los beneficios de la plataforma. El onboarding era largo y generaba abandono.',
      solution: 'Desarrollé una estrategia de contenido basada en los jobs-to-be-done de los usuarios, simplifiqué el onboarding a 3 pasos clave y creé microtextos que guían al usuario.',
      results: [
        'Aumento del 120% en conversión de landing',
        'Reducción del 45% en abandono de onboarding',
        'Mejora del 60% en activación de usuarios',
        'Feedback positivo en claridad de contenidos'
      ],
      images: [
        'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYXRmb3JtJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MDk3NzM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1641886336879-340cc977163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA4ODY5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1705909770198-7e83c24e1616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDk3NzM5MHww&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    'leo-ai': {
      title: 'Leo con IA',
      subtitle: 'Finalista Hackathon OpenAI LATAM',
      client: 'Proyecto personal - Hackathon',
      duration: '48 horas',
      role: 'Product Designer & UX Researcher',
      team: '2 Developers, Product Manager, Designer',
      hero: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGVkdWNhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwOTc3Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['IA', 'UX Research', 'Hackathon', 'EdTech'],
      overview: 'Diseño de experiencia educativa potenciada con IA para mejorar la comprensión lectora en niños. Proyecto finalista en Hackathon OpenAI LATAM enfocado en democratizar el acceso a educación de calidad.',
      challenge: 'Niños con dificultades de comprensión lectora no tenían acceso a tutores personalizados. Necesitaban una herramienta que se adaptara a su nivel y ritmo de aprendizaje.',
      solution: 'Diseñamos una experiencia conversacional donde la IA actúa como tutor empático, adaptando el nivel de dificultad y ofreciendo feedback personalizado en tiempo real.',
      results: [
        'Finalistas entre 500+ proyectos LATAM',
        'Prototipo validado con 20 niños',
        'Mejora del 40% en comprensión lectora',
        'Engagement promedio de 25 minutos'
      ],
      images: [
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGVkdWNhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwOTc3Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1641886336879-340cc977163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA4ODY5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1705909770198-7e83c24e1616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDk3NzM5MHww&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    'nalia-ai': {
      title: 'Nalia – Agente de IA',
      subtitle: 'Diseño de experiencia conversacional aseguradora',
      client: 'Compañía de seguros',
      duration: '4 meses',
      role: 'Conversational Designer (AX)',
      team: 'AX Designer, AI Engineer, Product Manager, Developers',
      hero: 'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwaW50ZXJmYWNlJTIwY29udmVyc2F0aW9ufGVufDF8fHx8MTc2MDk3NzM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['AX', 'Conversational Design', 'Insurance', 'IA'],
      overview: 'Diseño de experiencia conversacional (AX) para agente de IA en sector asegurador. Foco en empatía, claridad y diseño de diálogos naturales que generen confianza en momentos sensibles.',
      challenge: 'Los clientes desconfiaban de chatbots en temas sensibles como seguros. Necesitaban sentir empatía y claridad en conversaciones sobre siniestros y coberturas.',
      solution: 'Diseñé diálogos conversacionales empáticos, con tono cercano pero profesional. Implementé escalamiento a humanos cuando la IA detecta frustración o complejidad.',
      results: [
        'Reducción del 60% en llamadas básicas',
        'NPS de 8.2/10 en interacciones con IA',
        'Resolución del 75% de consultas sin escalamiento',
        'Tiempo promedio de resolución: 2 minutos'
      ],
      images: [
        'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwaW50ZXJmYWNlJTIwY29udmVyc2F0aW9ufGVufDF8fHx8MTc2MDk3NzM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1641886336879-340cc977163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA4ODY5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1705909770198-7e83c24e1616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDk3NzM5MHww&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    'uss-app': {
      title: 'USS – Rediseño de experiencia digital',
      subtitle: 'Del puesto 21 al 9 en App Store',
      client: 'Universidad San Sebastián',
      duration: 'Ago 2022 – Ene 2023',
      role: 'UX Researcher / Product Designer',
      team: 'UX Research, UX/UI, PO, Stakeholders USS',
      tools: 'Figma · Miro · Maze · Google Analytics · Qservus',
      hero: ussProjectImage,
      tags: ['UX Research', 'Mobile App', 'Design Thinking', 'Education'],
      overview: 'La USS contaba con un ecosistema digital fragmentado: Mi App y Mi Portal ofrecían experiencias inconsistentes, poco cohesionadas y con baja percepción de valor por parte de los estudiantes. El desafío era rediseñar esta experiencia poniendo al estudiante en el centro, consolidar canales de autogestión y mejorar indicadores como CSAT, NPS y posicionamiento en stores.',
      objective: 'Mejorar la experiencia digital del estudiante, modernizando Mi App y Mi Portal, alineándolos al nuevo Kit Digital institucional y estableciendo un marco de diseño centrado en el usuario.',
      challenge: 'La USS enfrentaba un ecosistema digital fragmentado con experiencias inconsistentes entre Mi App y Mi Portal. Los estudiantes reportaban procesos clave desintegrados (certificados, horarios, credencial), rechazo al login reiterado, falta de personalización por etapa académica y baja percepción de pertenencia. El reto era unificar esta experiencia y hacerla significativa.',
      process: [
        {
          phase: 'Discovery & Research',
          activities: [
            'Análisis de contexto institucional y tecnológico',
            'Benchmark nacional e internacional',
            'Investigación de escritorio y analítica (Google Analytics)',
            'Entrevistas con 7 áreas clave y stakeholders internos',
            'Formulación de hipótesis'
          ]
        },
        {
          phase: 'Research con estudiantes',
          activities: [
            'Workshops presenciales y online con estudiantes de distintos perfiles y regiones',
            'Creación de User Personas',
            'Customer Journey Map',
            'Mapas de Empatía',
            'Identificación de hallazgos transversales'
          ]
        }
      ],
      insights: [
        'Fragmentación de la experiencia entre App y Portal',
        'Procesos clave desintegrados (certificados, horarios, credencial)',
        'Rechazo al login reiterado',
        'Necesidad de personalización por etapa académica',
        'Falta de contacto con vida estudiantil y salud mental',
        'Baja percepción de pertenencia'
      ],
      solution: 'Un sistema digital unificado, progresivo y adaptativo, que evoluciona con el estudiante. Nueva arquitectura de información por perfil (Pregrado, Advance, Egresados), navegación clara con acceso rápido y diseño responsive. Home con funcionalidades clave integrando los pilares de experiencia: control, resolutividad, disponibilidad, pertenencia y tiempo.',
      results: [
        'Ascenso del puesto 21 al 9 en App Store (2023)',
        '+60 usuarios entrevistados y validados en terreno',
        'Adopción de marco de diseño centrado en el usuario',
        'Base para futuras mejoras escalables'
      ],
      reflection: 'Este proyecto me enseñó el valor de escuchar a los usuarios y convertir sus emociones, frustraciones y aspiraciones en diseño accionable. Fue una experiencia transformadora que alineó estrategia, tecnología y empatía con impacto real.',
      images: [
        'https://images.unsplash.com/photo-1641886336879-340cc977163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA4ODY5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1705909770198-7e83c24e1616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDk3NzM5MHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1613442301287-4fa478efd9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhcHAlMjBtb2JpbGUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwOTc3Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    'cencosud-wizard': {
      title: 'Cencosud Wizard',
      subtitle: 'IA + Design Sprint para ecommerce interno',
      client: 'Cencosud',
      duration: '2 meses',
      role: 'Design Sprint Facilitator & UX Designer',
      team: 'Facilitator, UX Designer, Product Owner, Engineers',
      hero: 'https://images.unsplash.com/photo-1705909770198-7e83c24e1616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDk3NzM5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Design Sprint', 'IA', 'Workshop', 'Retail'],
      overview: 'Facilitación de Design Sprint para implementación de IA en plataforma de ecommerce interno de Cencosud. Diseño de flujos optimizados y workshops con equipos multidisciplinarios para definir estrategia.',
      challenge: 'Equipos internos gastaban horas buscando productos en catálogos masivos. Necesitaban una herramienta inteligente que acelerara el proceso.',
      solution: 'Facilité un Design Sprint de 5 días, diseñamos un asistente de IA que interpreta lenguaje natural y sugiere productos. Validamos con usuarios en tiempo real.',
      results: [
        'Reducción del 65% en tiempo de búsqueda',
        'Aumento del 40% en precisión de pedidos',
        'Prototipo validado en 1 semana',
        'Implementación en 3 meses'
      ],
      images: [
        'https://images.unsplash.com/photo-1705909770198-7e83c24e1616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDk3NzM5MHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYXRmb3JtJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MDk3NzM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1641886336879-340cc977163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA4ODY5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
  };

  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center space-y-4">
          <h1 className="text-3xl">Proyecto no encontrado</h1>
          <Button onClick={() => onNavigate('projects')} variant="default">
            Ver todos los proyectos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-muted">
        <ImageWithFallback 
          src={project.hero}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('projects')}
              className="text-white hover:text-white/80 mb-6 -ml-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a proyectos
            </Button>
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/50 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Cliente</p>
              <p className="text-foreground">{project.client}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Duración</p>
              <p className="text-foreground">{project.duration}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Mi rol</p>
              <p className="text-foreground">{project.role}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Equipo</p>
              <p className="text-foreground">{project.team}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl">Resumen del proyecto</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
          {project.objective && (
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl mb-3 text-primary">Objetivo</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.objective}
              </p>
            </Card>
          )}
        </div>
      </section>

      {/* Process (only for USS) */}
      {project.process && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/50">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-3xl sm:text-4xl text-center">Proceso (Doble Diamante)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {project.process.map((phase: any, index: number) => (
                <Card key={index} className="p-8 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground">{index + 1}</span>
                      </div>
                      <h3 className="text-2xl">{phase.phase}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {phase.activities.map((activity: string, actIndex: number) => (
                      <li key={actIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Insights (only for USS) */}
      {project.insights && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl sm:text-4xl text-center">Hallazgos clave</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.insights.map((insight: string, index: number) => (
                <Card key={index} className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-foreground">{insight}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Images */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl text-center">Proceso visual</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <ImageWithFallback 
                  src={image}
                  alt={`${project.title} - Imagen ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl text-center">Resultados e impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result: string, index: number) => (
              <Card key={index} className="p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg">{result}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection (only for USS) */}
      {project.reflection && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl text-center text-primary">Reflexión personal</h2>
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic text-center">
                  "{project.reflection}"
                </blockquote>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl">¿Te gustó este proyecto?</h2>
          <p className="text-xl text-muted-foreground">
            Explora más de mi trabajo o conversemos sobre tu próximo proyecto.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => onNavigate('projects')}
              variant="default"
            >
              Ver más proyectos
            </Button>
            <Button 
              size="lg" 
              onClick={() => onNavigate('contact')}
              variant="outline"
            >
              Contactar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}