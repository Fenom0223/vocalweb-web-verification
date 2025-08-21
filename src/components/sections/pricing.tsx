'use client';

import { useTranslations } from '@/hooks/use-translations';
import { PricingCard } from '@/components/pricing-card';

export default function Pricing() {
  const t = useTranslations();

  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.pricing.title}</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">{t.pricing.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {t.pricing.cards.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
          <PricingCard {...t.pricing.comprehensive} isComprehensive />
        </div>
      </div>
    </section>
  );
}
