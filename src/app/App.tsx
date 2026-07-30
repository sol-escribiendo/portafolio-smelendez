import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectDetail } from './components/ProjectDetail';
import { USSProjectPage } from './components/USSProjectPage';
import { AboutPage } from './components/AboutPage';
import { BlogPage } from './components/BlogPage';
import { BlogPost } from './components/BlogPost';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [currentArticle, setCurrentArticle] = useState<string | null>(null);

  const handleNavigate = (page: string, itemId?: string) => {
    setCurrentPage(page);
    
    if (page === 'project' && itemId) {
      setCurrentProject(itemId);
      setCurrentArticle(null);
    } else if (page === 'article' && itemId) {
      setCurrentArticle(itemId);
      setCurrentProject(null);
    } else {
      setCurrentProject(null);
      setCurrentArticle(null);
    }
    
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case 'project':
        return currentProject ? (
          <ProjectDetail projectId={currentProject} onNavigate={handleNavigate} />
        ) : (
          <ProjectsPage onNavigate={handleNavigate} />
        );
      case 'ussproject':
        return <USSProjectPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'article':
        return currentArticle ? (
          <BlogPost articleId={currentArticle} onNavigate={handleNavigate} />
        ) : (
          <BlogPage onNavigate={handleNavigate} />
        );
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="text-base sm:text-lg mb-3 sm:mb-4">Solange Meléndez Sole</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  UX Designer especializada en crear experiencias digitales que conectan con las personas 
                  y resuelven problemas reales a través de diseño centrado en el usuario.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm sm:text-base mb-3 sm:mb-4 font-medium">Navegación</h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>
                    <button 
                      onClick={() => handleNavigate('home')}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Inicio
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('projects')}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Proyectos
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('about')}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Acerca
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('blog')}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Blog
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('contact')}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Contacto
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm sm:text-base mb-3 sm:mb-4 font-medium">Blog</h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>
                    <button 
                      onClick={() => handleNavigate('article', 'future-of-ux')}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      IA y UX Design
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('article', 'design-systems')}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Design Systems
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('blog')}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Todos los artículos
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm sm:text-base mb-3 sm:mb-4 font-medium">Contacto</h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="break-all hover:text-foreground transition-colors">solange.melendezsole@gmail.com</li>
                  <li>
                    <a 
                      href="https://medium.com/@solange.melendezsole"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      Medium
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://linkedin.com/in/solangemelendezsole"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">
                © 2024 Solange Meléndez Sole. Todos los derechos reservados.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground text-xs sm:text-sm transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground text-xs sm:text-sm transition-colors">
                  Términos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}