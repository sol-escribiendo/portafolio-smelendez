import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPageProps {
  onNavigate: (page: string, articleId?: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const featuredArticle = {
    id: 'future-of-ux',
    title: '¿IA inteligente? Sí. ¿IA usable y empática? Ese es el verdadero desafío.',
    excerpt: 'Exploramos cómo crear sistemas de IA que no solo sean inteligentes, sino verdaderamente centrados en el usuario y empáticos.',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=400&fit=crop',
    readTime: '8 min',
    date: '15 Jun 2024',
    category: 'Tendencias'
  };

  const articles = [
    {
      id: 'design-systems',
      title: 'Construyendo Design Systems escalables',
      excerpt: 'Una guía práctica para crear sistemas de diseño que crezcan con tu producto y equipo.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
      readTime: '6 min',
      date: '10 Jun 2024',
      category: 'Design Systems'
    },
    {
      id: 'user-research',
      title: 'Research remoto: Técnicas y herramientas',
      excerpt: 'Cómo realizar investigación de usuarios efectiva en un mundo cada vez más digital.',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop',
      readTime: '10 min',
      date: '5 Jun 2024',
      category: 'Research'
    },
    {
      id: 'accessibility',
      title: 'Diseño inclusivo: Más allá de la accesibilidad',
      excerpt: 'Por qué el diseño inclusivo no es solo lo correcto, sino también lo inteligente para los negocios.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
      readTime: '7 min',
      date: '1 Jun 2024',
      category: 'Accesibilidad'
    },
    {
      id: 'prototyping',
      title: 'Del wireframe al prototipo: Un workflow eficiente',
      excerpt: 'Optimiza tu proceso de prototipado con estas técnicas y herramientas probadas.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop',
      readTime: '5 min',
      date: '28 May 2024',
      category: 'Prototipado'
    },
    {
      id: 'mobile-first',
      title: 'Mobile-first: Más que una estrategia de diseño',
      excerpt: 'Cómo pensar en mobile-first puede mejorar toda tu experiencia digital.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      readTime: '8 min',
      date: '25 May 2024',
      category: 'Mobile Design'
    },
    {
      id: 'ux-metrics',
      title: 'Métricas de UX que realmente importan',
      excerpt: 'Identifica y mide los KPIs que demuestran el valor real del diseño UX.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      readTime: '9 min',
      date: '20 May 2024',
      category: 'Analytics'
    }
  ];

  const categories = ['Todos', 'Tendencias', 'Design Systems', 'Research', 'Accesibilidad', 'Prototipado', 'Mobile Design', 'Analytics'];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">Blog</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Reflexiones, tutoriales y insights sobre UX Design, tendencias 
            de la industria y metodologías de trabajo.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl mb-6 sm:mb-8">Artículo destacado</h2>
          <div 
            className="group cursor-pointer"
            onClick={() => onNavigate('article', featuredArticle.id)}
          >
            <div className="bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:scale-[1.02]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <ImageWithFallback 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
                    <span className="bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs">
                      {featuredArticle.category}
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{featuredArticle.date}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">• {featuredArticle.readTime} lectura</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4">{featuredArticle.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
                    <span className="text-sm sm:text-base mr-2">Leer artículo</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-full border border-border hover:bg-accent transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl mb-6 sm:mb-8">Todos los artículos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => (
              <div 
                key={article.id}
                className="group cursor-pointer"
                onClick={() => onNavigate('article', article.id)}
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                      <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.readTime} lectura</span>
                      <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs sm:text-sm mr-1">Leer</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4">¿Te gusta lo que lees?</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Suscríbete a mi newsletter para recibir los últimos artículos sobre UX Design 
            directamente en tu inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm sm:text-base"
            />
            <button className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap text-sm sm:text-base">
              Suscribirse
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3 sm:mt-4">
            Sin spam. Solo contenido de calidad, una vez por semana.
          </p>
        </div>
      </section>
    </div>
  );
}