'use client';
import { useTranslations } from '@/hooks/use-translations';
import { Button } from '@/components/ui/button';

export default function Cta() {
  const t = useTranslations();

  return (
    <section id="cta" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 text-glow">
          {t.cta.title}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            {t.cta.description}
        </p>
        <Button asChild size="lg" className="button-glow text-lg px-8 py-6">
          <a href="mailto:admin@vocalweb.club?subject=Personalized Demo Request">{t.cta.button}</a>
        </Button>
      </div>
    </section>
  );
}
