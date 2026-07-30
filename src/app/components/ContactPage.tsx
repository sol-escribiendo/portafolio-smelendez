import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Linkedin, Send, MessageSquare, Calendar } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground">
            ¿Diseñamos junt@s?
          </h1>
          <p className="text-xl text-muted-foreground">
            Estoy disponible para colaboraciones, proyectos freelance o posiciones full-time. 
            Escribeme y conversemos sobre tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 space-y-6">
              <h2 className="text-2xl">Información de Contacto</h2>

              <div className="space-y-4">
                <a
                  href="mailto:solange.melendezsole@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground break-all">
                      solange.melendezsole@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/solange-melendez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground">linkedin.com/in/solange-melendez</p>
                  </div>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-accent/50 space-y-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h3 className="text-lg">Tiempo de respuesta</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Normalmente respondo en menos de 24 horas durante días hábiles.
              </p>
            </Card>

            <Card className="p-6 bg-accent/50 space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="text-lg">Disponibilidad</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Actualmente disponible para proyectos freelance y colaboraciones.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl">¡Mensaje enviado!</h3>
                  <p className="text-muted-foreground">
                    Gracias por contactarme. Te responderé pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="¿De qué quieres hablar?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Enviar mensaje
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    O escríbeme directamente a{' '}
                    <a
                      href="mailto:solange.melendezsole@gmail.com"
                      className="text-primary hover:underline"
                    >
                      solange.melendezsole@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 pt-8">
          <div className="space-y-2">
            <h2 className="text-3xl text-foreground">¿Quieres saber más sobre mí?</h2>
            <p className="text-muted-foreground">
              Descubre mi experiencia, proyectos y proceso de trabajo.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" onClick={() => onNavigate('about')}>
              Sobre mí
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('projects')}>
              Ver proyectos
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('blog')}>
              Leer blog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
