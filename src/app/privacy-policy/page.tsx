'use client';
import { useTranslations } from '@/hooks/use-translations';

export default function PrivacyPolicyPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-primary mb-4">{t.privacyPolicy.title}</h1>
        <p className="text-muted-foreground mb-8">{t.privacyPolicy.effectiveDate}</p>
        
        <div className="prose prose-invert max-w-none text-foreground/80 space-y-6">
          <p>{t.privacyPolicy.intro}</p>
          
          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">{t.privacyPolicy.collectionTitle}</h2>
          <p>{t.privacyPolicy.collectionIntro}</p>

          <h3 className="text-xl font-headline font-semibold text-primary/80 pt-2">{t.privacyPolicy.apiDataTitle}</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>{t.privacyPolicy.sheetsTitle}</strong> {t.privacyPolicy.sheetsText}</li>
            <li><strong>{t.privacyPolicy.calendarTitle}</strong> {t.privacyPolicy.calendarText}</li>
            <li><strong>{t.privacyPolicy.driveTitle}</strong> {t.privacyPolicy.driveText}</li>
            <li><strong>{t.privacyPolicy.mailTitle}</strong> {t.privacyPolicy.mailText}</li>
            <li><strong>{t.privacyPolicy.purposeTitle}</strong> {t.privacyPolicy.purposeText}</li>
            <li><strong>{t.privacyPolicy.tokensTitle}</strong> {t.privacyPolicy.tokensText}</li>
          </ul>

          <h3 className="text-xl font-headline font-semibold text-primary/80 pt-2">{t.privacyPolicy.usageDataTitle}</h3>
          <p>{t.privacyPolicy.usageDataText}</p>

          <h3 className="text-xl font-headline font-semibold text-primary/80 pt-2">{t.privacyPolicy.billingDataTitle}</h3>
          <p>{t.privacyPolicy.billingDataText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">{t.privacyPolicy.protectionTitle}</h2>
          <p>{t.privacyPolicy.protectionText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">{t.privacyPolicy.retentionTitle}</h2>
          <p>{t.privacyPolicy.retentionText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">{t.privacyPolicy.rightsTitle}</h2>
          <p>{t.privacyPolicy.rightsText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">{t.privacyPolicy.changesTitle}</h2>
          <p>{t.privacyPolicy.changesText}</p>

          <h2 className="text-2xl font-headline font-bold text-primary/90 pt-4">{t.privacyPolicy.contactTitle}</h2>
          <p>{t.privacyPolicy.contactText}</p>
          <p>
            VocalWeb Solutions<br/>
            Email: admin@vocalweb.club<br/>
            Phone: +5492954309600<br/>
            Address: Catamarca 584, 6300, Santa Rosa, Argentina
          </p>
        </div>
      </div>
    </div>
  );
}
