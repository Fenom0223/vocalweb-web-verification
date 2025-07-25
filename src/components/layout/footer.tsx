'use client';

import { useTranslations } from '@/hooks/use-translations';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Image src="/logo-vocal-dash.png" alt="VocalWeb Solutions Logo" width={160} height={35} />
            </div>
            <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footer.linksTitle}</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.services}</Link></li>
              <li><Link href="/#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.pricing}</Link></li>
              <li><Link href="/#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.faq}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.legalTitle}</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.footer.privacy}</Link></li>
              <li><Link href="/terms-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.footer.terms}</Link></li>
              <li><Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.footer.refund}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} VocalWeb Solutions. {t.footer.rights}</p>
          <p className="mt-2">Catamarca 584, 6300, Santa Rosa, Argentina</p>
        </div>
      </div>
    </footer>
  );
}
