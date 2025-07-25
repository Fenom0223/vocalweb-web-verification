'use client';

import { useTranslations } from '@/hooks/use-translations';
import Link from 'next/link';

const VocalWebLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="hsl(var(--primary))"/>
        <path d="M12 6C9.24 6 7 8.24 7 11V13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13V11C17 8.24 14.76 6 12 6ZM12 16C10.34 16 9 14.66 9 13V11C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11V13C15 14.66 13.66 16 12 16Z" fill="hsl(var(--primary))"/>
    </svg>
)


export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <VocalWebLogo />
                <h3 className="text-xl font-bold">VocalWeb Solutions</h3>
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
