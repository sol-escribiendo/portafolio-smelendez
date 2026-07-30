import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ArrowLeft } from 'lucide-react';
import ussImage from 'figma:asset/d1faa9f3de7d8549ab59b65b5818ae070ed4b7d8.png';
import ussScreensImage from 'figma:asset/dbaeab077315e79a7b144b02e99bfbdf58f19407.png';

interface USSProjectPageProps {
  onNavigate: (page: string) => void;
}

export function USSProjectPage({ onNavigate }: USSProjectPageProps) {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-muted">
        <ImageWithFallback 
          src={ussImage}
          alt="USS - Rediseño de experiencia digital"
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
                USS – Rediseño de experiencia digital
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Del puesto 21 al 9 en App Store
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
              <p className="text-foreground">Universidad San Sebastián</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Duración</p>
              <p className="text-foreground">Ago 2022 – Ene 2023</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Mi rol</p>
              <p className="text-foreground">UX Researcher / Product Designer</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Equipo</p>
              <p className="text-foreground">UX Research, UX/UI, PO, Stakeholders USS</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">UX Research</Badge>
              <Badge variant="secondary">Mobile App</Badge>
              <Badge variant="secondary">Design Thinking</Badge>
              <Badge variant="secondary">Education</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Herramientas</p>
              <p className="text-sm text-muted-foreground">Figma · Miro · Maze · Google Analytics · Qservus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Context & Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl">Contexto</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La USS contaba con un ecosistema digital fragmentado: Mi App y Mi Portal ofrecían 
              experiencias inconsistentes, poco cohesionadas y con baja percepción de valor por 
              parte de los estudiantes. El desafío era <strong className="text-foreground">rediseñar esta experiencia</strong> poniendo 
              al estudiante en el centro, consolidar canales de autogestión y mejorar indicadores 
              como CSAT, NPS y posicionamiento en stores.
            </p>
          </div>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-xl mb-3 text-primary">Objetivo del proyecto</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mejorar la experiencia digital del estudiante, modernizando Mi App y Mi Portal, 
              alineándolos al nuevo Kit Digital institucional y estableciendo un marco de diseño 
              centrado en el usuario.
            </p>
          </Card>
        </div>
      </section>

      {/* Process - Double Diamond */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl">Proceso (Doble Diamante)</h2>
            <p className="text-muted-foreground">Metodología aplicada en el rediseño</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Phase 1 */}
            <Card className="p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground">1</span>
                  </div>
                  <h3 className="text-2xl">Etapa 1 – Discovery & Research</h3>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-muted-foreground">Análisis de contexto institucional y tecnológico</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-muted-foreground">Benchmark nacional e internacional</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-muted-foreground">Investigación de escritorio y analítica (Google Analytics)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-muted-foreground">Entrevistas con 7 áreas clave y stakeholders internos</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-muted-foreground">Formulación de hipótesis</span>
                </li>
              </ul>
            </Card>

            {/* Phase 2 */}
            <Card className="p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground">2</span>
                  </div>
                  <h3 className="text-2xl">Etapa 2 – Research con estudiantes</h3>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-muted-foreground">Workshops presenciales y online con estudiantes de distintos perfiles y regiones</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-muted-foreground">Creación de User Personas</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-muted-foreground">Customer Journey Map</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-muted-foreground">Mapas de Empatía</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-muted-foreground">Identificación de hallazgos transversales</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl text-center">Hallazgos clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Fragmentación de la experiencia entre App y Portal',
              'Procesos clave desintegrados (certificados, horarios, credencial)',
              'Rechazo al login reiterado',
              'Necesidad de personalización por etapa académica',
              'Falta de contacto con vida estudiantil y salud mental',
              'Baja percepción de pertenencia'
            ].map((insight, index) => (
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

      {/* Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            <Card className="p-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl text-primary">Propuesta de solución</h2>
              <blockquote className="text-xl text-muted-foreground italic border-l-4 border-primary pl-6">
                Un sistema digital unificado, progresivo y adaptativo, que evoluciona con el estudiante.
              </blockquote>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground">Nueva arquitectura de información por perfil (Pregrado, Advance, Egresados)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground">Navegación clara, acceso rápido, diseño responsive</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground">Home con funcionalidades clave</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground">Integración de pilares de experiencia: control, resolutividad, disponibilidad, pertenencia, tiempo</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Showcase - Featured Screens */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl">Resultado final</h2>
            <p className="text-muted-foreground text-lg">
              Una nueva experiencia digital que acompaña al estudiante
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12">
            <ImageWithFallback 
              src={ussScreensImage}
              alt="Pantallas finales de la aplicación USS - Nueva experiencia digital"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl text-center">Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Ascenso del puesto 21 al 9 en el ranking App Store (2023)',
              'Adopción de marco de diseño centrado en el usuario',
              '+60 usuarios entrevistados y validados en terreno',
              'Base para futuras mejoras escalables'
            ].map((result, index) => (
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

      {/* Reflection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl text-center text-primary">Reflexión personal</h2>
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic text-center">
                "Este proyecto me enseñó el valor de escuchar a los usuarios y convertir sus emociones, 
                frustraciones y aspiraciones en diseño accionable. Fue una experiencia transformadora 
                que alineó estrategia, tecnología y empatía con impacto real."
              </blockquote>
            </div>
          </Card>
        </div>
      </section>

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