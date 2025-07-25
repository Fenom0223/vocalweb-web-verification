'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useTranslations } from '@/hooks/use-translations';
import { cn } from '@/lib/utils';

const VocalWebLogo = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
        <path d="M12 6C9.24 6 7 8.24 7 11V13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13V11C17 8.24 14.76 6 12 6ZM12 16C10.34 16 9 14.66 9 13V11C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11V13C15 14.66 13.66 16 12 16Z" fill="currentColor"/>
    </svg>
)

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
            <VocalWebLogo />
            <span className="font-headline font-bold text-xl text-white">VocalWeb Solutions</span>
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
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/90 backdrop-blur-lg border-l border-white/10">
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                         <Link href="/" className="flex items-center gap-2">
                            <VocalWebLogo />
                         </Link>
                         <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
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
