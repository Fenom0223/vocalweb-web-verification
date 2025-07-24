'use client';
import { useTranslations } from '@/hooks/use-translations';

export default function TermsConditionsPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-primary mb-4">{t.terms.title}</h1>
        <p className="text-muted-foreground mb-8">{t.terms.effectiveDate}</p>

        <div className="prose prose-invert max-w-none text-foreground/80 space-y-6">
          <p>{t.terms.intro}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">1. {t.terms.serviceTitle}</h2>
          <p>{t.terms.serviceText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">2. {t.terms.acceptableUseTitle}</h2>
          <p>{t.terms.acceptableUseText1}</p>
          <p>{t.terms.acceptableUseText2}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">3. {t.terms.registrationTitle}</h2>
          <p>{t.terms.registrationText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">4. {t.terms.apiAccessTitle}</h2>
          <p>{t.terms.apiAccessText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">5. {t.terms.pricingTitle}</h2>
          <p>{t.terms.pricingText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">6. {t.terms.ipTitle}</h2>
          <p>{t.terms.ipText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">7. {t.terms.liabilityTitle}</h2>
          <p>{t.terms.liabilityText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">8. {t.terms.modificationsTitle}</h2>
          <p>{t.terms.modificationsText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">9. {t.terms.lawTitle}</h2>
          <p>{t.terms.lawText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">10. {t.terms.contactTitle}</h2>
          <p>{t.terms.contactIntro}</p>
          <p>
            Email: admin@vocalweb.club<br/>
            Phone: +5492954309600<br/>
            Address: Catamarca 584, 6300, Santa Rosa, Argentina
          </p>
        </div>
      </div>
    </div>
  );
}
