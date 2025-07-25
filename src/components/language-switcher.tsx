'use client';

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-primary/50 p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={cn(
          'rounded-full px-3 py-1 text-xs',
          language === 'en' ? 'bg-primary/20 text-primary' : 'text-foreground/80 hover:text-primary'
        )}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('es')}
        className={cn(
          'rounded-full px-3 py-1 text-xs',
          language === 'es' ? 'bg-primary/20 text-primary' : 'text-foreground/80 hover:text-primary'
        )}
      >
        ES
      </Button>
    </div>
  );
}
