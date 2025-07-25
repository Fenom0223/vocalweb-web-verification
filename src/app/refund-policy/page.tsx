'use client';
import { useTranslations } from '@/hooks/use-translations';

export default function RefundPolicyPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{t.refundPolicy.title}</h1>
        <p className="text-muted-foreground mb-8">{t.refundPolicy.effectiveDate}</p>

        <div className="prose prose-invert max-w-none text-foreground/80 space-y-6">
          <p>{t.refundPolicy.intro}</p>

          <h2 className="text-2xl font-bold pt-4">{t.refundPolicy.developmentTitle}</h2>
          <p>{t.refundPolicy.developmentText}</p>

          <h2 className="text-2xl font-bold pt-4">{t.refundPolicy.maintenanceTitle}</h2>
          <p>{t.refundPolicy.maintenanceText}</p>

          <h2 className="text-2xl font-bold pt-4">{t.refundPolicy.exceptionsTitle}</h2>
          <p>{t.refundPolicy.exceptionsIntro}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t.refundPolicy.exception1}</li>
            <li>{t.refundPolicy.exception2}</li>
          </ul>
          <p>{t.refundPolicy.exceptionsOutro}</p>

          <h2 className="text-2xl font-bold pt-4">{t.refundPolicy.processTitle}</h2>
          <p>{t.refundPolicy.processText}</p>
          
          <h2 className="text-2xl font-bold pt-4">{t.refundPolicy.modificationsTitle}</h2>
          <p>{t.refundPolicy.modificationsText}</p>

          <h2 className="text-2xl font-bold pt-4">{t.refundPolicy.contactTitle}</h2>
          <p>{t.refundPolicy.contactIntro}</p>
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
