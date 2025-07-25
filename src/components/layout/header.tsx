'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useTranslations } from '@/hooks/use-translations';
import { cn } from '@/lib/utils';

export default function Header() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#services', label: t.nav.services },
    { href: '/#pricing', label: t.nav.pricing },
    { href: '/#faq', label: t.nav.faq },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-vocal-dash.png" alt="VocalWeb Solutions Logo" width={120} height={26} />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button asChild size="sm" className="button-glow">
              <a href="mailto:admin@vocalweb.club">{t.nav.contact}</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/90 backdrop-blur-lg border-l border-white/10">
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                         <Link href="/" className="flex items-center gap-2">
                            <Image src="/logo-vocal-dash.png" alt="VocalWeb Solutions Logo" width={120} height={26} />
                         </Link>
                         <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-6 w-6 text-primary" />
                            </Button>
                         </SheetTrigger>
                    </div>

                  <nav className="flex flex-col items-center gap-6 text-lg">
                    {navLinks.map(link => (
                      <SheetTrigger asChild key={link.href}>
                         <Link href={link.href} className="font-bold text-foreground hover:text-primary transition-colors">
                           {link.label}
                         </Link>
                      </SheetTrigger>
                    ))}
                  </nav>
                  <div className="mt-auto flex flex-col items-center gap-6">
                    <LanguageSwitcher />
                    <Button asChild className="w-full button-glow">
                      <a href="mailto:admin@vocalweb.club">{t.nav.contact}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
