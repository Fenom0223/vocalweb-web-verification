'use client';
import { useTranslations } from '@/hooks/use-translations';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const t = useTranslations();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 animate-background-pan"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.15), transparent 30%), 
                             radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.15), transparent 30%)`,
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
          {t.hero.title}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="button-glow text-lg px-8 py-6">
            <a href="mailto:admin@vocalweb.club?subject=Personalized Demo Request">
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
            <a href="#pricing">{t.hero.secondaryCta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
