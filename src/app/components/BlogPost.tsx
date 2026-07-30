import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from 'figma:asset/fb338f03fb873db6faf1924861f817f888af5117.png';

interface BlogPostProps {
  articleId: string;
  onNavigate: (page: string) => void;
}

export function BlogPost({ articleId, onNavigate }: BlogPostProps) {
  // Mock data - en una app real esto vendría de una API o CMS
  const articlesData: Record<string, any> = {
    'future-of-ux': {
      title: '¿IA inteligente? Sí. ¿IA usable y empática? Ese es el verdadero desafío.',
      excerpt: '"El futuro de la IA no depende solo de qué tan inteligente sea un agente, sino de qué tan bien pueda ser entendido y usado por las personas".',
      image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=1200&h=600&fit=crop',
      readTime: '8 min',
      date: '15 Jun 2024',
      category: 'Tendencias',
      author: {
        name: 'Solange Meléndez Sole',
        bio: 'UX Designer y estratega digital con experiencia en la intersección entre tecnología e interacción humana. Especializada en diseño de experiencias centradas en el usuario y la aplicación ética de IA en productos digitales.',
        avatar: profileImage,
        medium: 'https://medium.com/@solange.melendezsole',
        linkedin: 'https://linkedin.com/in/solangemelendezsole',
        email: 'solange.melendezsole@gmail.com'
      },
      content: `
        <p>Vivimos el boom de los asistentes y agentes con inteligencia artificial. Están por todas partes: en retail, salud, banca, educación, telecomunicaciones y turismo. Las marcas compiten por integrar soluciones de IA cada vez más sofisticadas. Pero en esa carrera tecnológica, muchas veces olvidamos una pregunta crucial:</p>

        <h2>¿Quién se asegura de que estos agentes sean realmente entendibles, usables y valiosos para las personas?</h2>
        
        <p>No basta con subirse al tren de la IA. El verdadero reto no es solo crear un agente "inteligente", sino diseñar una relación humano-céntrica que genere valor real para los usuarios.</p>

        <p>Como diseñadores UX, tenemos la responsabilidad de humanizar la tecnología y asegurar que estos sistemas no solo funcionen, sino que lo hagan de manera intuitiva, accesible y empática.</p>

        <h2>El desafío de la usabilidad en IA</h2>
        <p>La inteligencia artificial más sofisticada del mundo es inútil si las personas no pueden entenderla o usarla efectivamente. Los principales retos incluyen:</p>
        <ul>
          <li><strong>Transparencia algorítmica:</strong> Los usuarios necesitan entender cómo y por qué la IA toma ciertas decisiones</li>
          <li><strong>Lenguaje natural:</strong> La comunicación debe ser clara, contextual y libre de jerga técnica</li>
          <li><strong>Manejo de errores:</strong> Cuando la IA falla, debe hacerlo de manera comprensible y recuperable</li>
          <li><strong>Personalización progresiva:</strong> El sistema debe aprender y adaptarse sin abrumar al usuario</li>
        </ul>

        <h2>Diseñando para la empatía artificial</h2>
        <p>La empatía no es solo un "nice to have" en el diseño de IA; es fundamental para crear experiencias que realmente sirvan a las personas:</p>

        <p><strong>Contextualización emocional:</strong> Los sistemas de IA deben reconocer no solo qué está haciendo el usuario, sino también su estado emocional y el contexto de la situación.</p>

        <p><strong>Comunicación empática:</strong> El tono, el timing y el contenido de las respuestas de la IA deben ajustarse según el contexto emocional del usuario.</p>

        <p><strong>Límites claros:</strong> Los usuarios deben entender qué puede y qué no puede hacer la IA, evitando frustraciones y expectativas irreales.</p>

        <h2>Principios para IA centrada en el usuario</h2>
        <p>Basándome en mi experiencia diseñando productos con IA, estos son los principios fundamentales que debemos seguir:</p>

        <ul>
          <li><strong>Progresividad:</strong> Introduce funcionalidades de IA gradualmente, permitiendo que los usuarios se adapten</li>
          <li><strong>Control del usuario:</strong> Siempre mantén al usuario en control, la IA debe sugerir, no imponer</li>
          <li><strong>Explicabilidad:</strong> Cada acción de la IA debe poder explicarse en términos humanos simples</li>
          <li><strong>Inclusividad:</strong> Diseña para la diversidad cognitiva, cultural y de habilidades</li>
        </ul>

        <h2>El rol evolucional del diseñador UX</h2>
        <p>En esta nueva era, nuestro rol como diseñadores se expande más allá de interfaces tradicionales:</p>

        <p><strong>Arquitectos de conversaciones:</strong> Diseñamos flujos de diálogo que se sienten naturales y productivos.</p>

        <p><strong>Guardianes éticos:</strong> Aseguramos que la IA sea justa, transparente y respete la privacidad del usuario.</p>

        <p><strong>Traductores humano-máquina:</strong> Construimos puentes entre la complejidad técnica y la comprensión humana.</p>

        <h2>Casos de éxito y aprendizajes</h2>
        <p>En mis proyectos recientes trabajando con sistemas de IA, he observado que los más exitosos comparten características comunes:</p>

        <ul>
          <li><strong>Onboarding progresivo:</strong> Introducen la IA de manera gradual, construyendo confianza paso a paso</li>
          <li><strong>Feedback continuo:</strong> Permiten al usuario calificar y mejorar las respuestas de la IA</li>
          <li><strong>Salidas de emergencia:</strong> Ofrecen alternativas humanas cuando la IA no puede resolver un problema</li>
          <li><strong>Memoria contextual:</strong> Recuerdan preferencias y contexto sin ser invasivos</li>
        </ul>

        <h2>Hacia una IA más humana</h2>
        <p>El futuro no se trata de hacer que la IA sea más inteligente, sino de hacerla más humana en su interacción. Esto significa:</p>

        <p><strong>Diseñar para la confianza:</strong> La confianza se construye a través de la consistencia, transparencia y respeto por las necesidades del usuario.</p>

        <p><strong>Priorizar la comprensión:</strong> Antes de agregar más funcionalidades, asegurémonos de que las existentes sean completamente comprensibles.</p>

        <p><strong>Medir el impacto humano:</strong> Las métricas de éxito deben incluir no solo eficiencia técnica, sino también satisfacción, comprensión y bienestar del usuario.</p>

        <h2>Conclusión</h2>
        <p>La verdadera revolución de la IA no vendrá de algoritmos más inteligentes, sino de experiencias más humanas. Como diseñadores UX, tenemos la oportunidad y responsabilidad de liderar esta transformación.</p>

        <p>El desafío no es técnico, es profundamente humano: ¿cómo creamos tecnología que no solo entienda nuestros comandos, sino que comprenda nuestras necesidades, emociones y contexto?</p>

        <p>La respuesta está en poner a las personas en el centro del diseño de IA, siempre.</p>
      `
    },
    'design-systems': {
      title: 'Construyendo Design Systems escalables',
      excerpt: 'Una guía práctica para crear sistemas de diseño que crezcan con tu producto y equipo.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      readTime: '6 min',
      date: '10 Jun 2024',
      category: 'Design Systems',
      author: {
        name: 'Solange Meléndez Sole',
        bio: 'UX Designer y estratega digital con experiencia en la intersección entre tecnología e interacción humana. Especializada en diseño de experiencias centradas en el usuario y la aplicación ética de IA en productos digitales.',
        avatar: profileImage,
        medium: 'https://medium.com/@solange.melendezsole',
        linkedin: 'https://linkedin.com/in/solangemelendezsole',
        email: 'solange.melendezsole@gmail.com'
      },
      content: `
        <p>Un design system no es solo una colección de componentes y guidelines. Es la columna vertebral que permite a los equipos crear experiencias consistentes y escalables. En este artículo, exploraremos cómo construir sistemas de diseño que realmente funcionen.</p>

        <h2>¿Por qué necesitas un Design System?</h2>
        <p>Los design systems resuelven problemas reales que enfrentan equipos de todos los tamaños:</p>
        <ul>
          <li><strong>Inconsistencia visual:</strong> Diferentes diseñadores creando variaciones de los mismos elementos</li>
          <li><strong>Desarrollo lento:</strong> Desarrolladores reconstruyendo componentes desde cero</li>
          <li><strong>Deuda de diseño:</strong> Acumulación de patrones y componentes obsoletos</li>
          <li><strong>Dificultad para escalar:</strong> Mantener consistencia a medida que el equipo crece</li>
        </ul>

        <h2>Principios fundamentales</h2>
        <p>Un design system exitoso se basa en principios claros que guían todas las decisiones de diseño:</p>

        <p><strong>Consistencia sin rigidez:</strong> El sistema debe promover consistencia pero permitir flexibilidad cuando sea necesario. No debe ser una camisa de fuerza.</p>

        <p><strong>Adopción gradual:</strong> Implementa el sistema de manera incremental. Comienza con los componentes más utilizados y expándete gradualmente.</p>

        <p><strong>Documentación viva:</strong> La documentación debe ser tan fácil de mantener como de consultar. Si es difícil de actualizar, se volverá obsoleta rápidamente.</p>

        <h2>Estructura recomendada</h2>
        <p>Un design system efectivo incluye varios niveles:</p>

        <h3>1. Tokens de diseño</h3>
        <p>Los tokens son los valores atómicos del sistema: colores, tipografías, espaciados, etc. Son la base sobre la que se construye todo lo demás.</p>

        <h3>2. Componentes base</h3>
        <p>Elementos fundamentales como botones, inputs, cards. Estos deben ser altamente reutilizables y bien documentados.</p>

        <h3>3. Patrones complejos</h3>
        <p>Combinaciones de componentes que resuelven problemas específicos: formularios, navegación, dashboards.</p>

        <h3>4. Guidelines y principios</h3>
        <p>Reglas de uso, mejores prácticas y principios que guían las decisiones de diseño.</p>

        <h2>Herramientas y implementación</h2>
        <p>La elección de herramientas dependerá de tu contexto, pero algunas consideraciones clave:</p>

        <ul>
          <li><strong>Figma/Sketch:</strong> Para la documentación visual y librerías de componentes</li>
          <li><strong>Storybook:</strong> Para documentar componentes de desarrollo</li>
          <li><strong>Design Tokens:</strong> Style Dictionary o Theo para mantener tokens sincronizados</li>
          <li><strong>Repositorio central:</strong> Un lugar único donde viva toda la documentación</li>
        </ul>

        <h2>Mantenimiento y evolución</h2>
        <p>Un design system es un producto en sí mismo y necesita un roadmap y mantenimiento constante:</p>

        <p><strong>Governance:</strong> Define quién puede hacer cambios y cómo se aprueban. Sin governance, el sistema se volverá caótico.</p>

        <p><strong>Feedback loops:</strong> Establece canales para que los usuarios del sistema (diseñadores y desarrolladores) puedan reportar problemas y sugerir mejoras.</p>

        <p><strong>Métricas de adopción:</strong> Mide qué tan bien se está adoptando el sistema y identifica áreas de mejora.</p>

        <h2>Errores comunes a evitar</h2>
        <ul>
          <li><strong>Construir en aislamiento:</strong> Involucra a todo el equipo desde el principio</li>
          <li><strong>Documentación perfecta:</strong> Es mejor tener documentación imperfecta que ninguna</li>
          <li><strong>Rigidez excesiva:</strong> El sistema debe evolucionar con las necesidades del producto</li>
          <li><strong>Falta de champions:</strong> Necesitas personas dedicadas a promover y mantener el sistema</li>
        </ul>

        <h2>Conclusión</h2>
        <p>Un design system bien implementado es una inversión que paga dividendos a largo plazo. Reduce el tiempo de desarrollo, mejora la consistencia y permite que los equipos se enfoquen en resolver problemas de usuario en lugar de reinventar la rueda.</p>

        <p>Recuerda: el mejor design system es el que realmente se usa. Mantén el foco en la adopción y la utilidad práctica por encima de la perfección teórica.</p>
      `
    }
  };

  const article = articlesData[articleId];

  if (!article) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Artículo no encontrado</h1>
          <button 
            onClick={() => onNavigate('blog')}
            className="text-primary hover:underline"
          >
            Volver al blog
          </button>
        </div>
      </div>
    );
  }

  // Related articles (simulated)
  const relatedArticles = [
    {
      id: 'user-research',
      title: 'Research remoto: Técnicas y herramientas',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=300&h=200&fit=crop',
    },
    {
      id: 'accessibility',
      title: 'Diseño inclusivo: Más allá de la accesibilidad',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=200&fit=crop',
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => onNavigate('blog')}
            className="text-muted-foreground hover:text-foreground mb-8 flex items-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </button>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
              {article.category}
            </span>
            <span className="text-sm text-muted-foreground">{article.date}</span>
            <span className="text-sm text-muted-foreground">• {article.readTime} lectura</span>
          </div>

          <h1 className="text-4xl md:text-5xl mb-6">{article.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{article.excerpt}</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden">
            <ImageWithFallback 
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg max-w-none [&_strong]:font-bold [&_strong]:text-primary [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-6 [&_ul]:my-6 [&_li]:mb-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              lineHeight: '1.7',
            }}
          />
        </div>
      </section>

      {/* Author Info */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card p-8 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-lg mb-2">Acerca de {article.author.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {article.author.bio}
                </p>
                <div className="flex gap-4">
                  <a 
                    href={article.author.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Medium
                  </a>
                  <a 
                    href={article.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href={`mailto:${article.author.email}`}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl mb-8">Artículos relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((related) => (
              <div 
                key={related.id}
                className="group cursor-pointer"
                onClick={() => onNavigate('article', related.id)}
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/9] overflow-hidden">
                    <ImageWithFallback 
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 mb-16 bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-4">¿Te gustó este artículo?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Compártelo con tu equipo o conéctate con Solange para seguir la conversación sobre UX y diseño centrado en el usuario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={article.author.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Leer en Medium
            </a>
            <button 
              onClick={() => onNavigate('blog')}
              className="border border-border px-8 py-4 rounded-xl hover:bg-accent transition-colors"
            >
              Leer más artículos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}