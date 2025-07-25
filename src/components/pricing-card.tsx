'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/use-translations';

interface PricingCardProps {
  title: string;
  description: string;
  devPrice: string;
  monthlyPrice: string;
  isComprehensive?: boolean;
  features?: string[];
}

export function PricingCard({ title, description, devPrice, monthlyPrice, isComprehensive = false, features }: PricingCardProps) {
  const t = useTranslations();
  
  return (
    <Card className={cn(
      "glassmorphism flex flex-col transition-all duration-300 card-glow",
      isComprehensive ? "border-primary/50 shadow-primary/20" : "border-white/10",
      "h-full"
    )}>
      <CardHeader className="pb-4">
        <CardTitle className={cn("text-2xl font-bold", isComprehensive && "text-primary")}>
          {title}
        </CardTitle>
        <CardDescription className="text-foreground/70 pt-2 min-h-[6rem]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
            <p className="text-sm text-muted-foreground">{t.pricing.devFee}</p>
            <p className="text-4xl font-bold">{devPrice}</p>
        </div>
        <div>
            <p className="text-sm text-muted-foreground">{t.pricing.monthlyFee}</p>
            <p className="text-4xl font-bold">{monthlyPrice}</p>
        </div>
        {features && (
          <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className={cn("w-full button-glow", isComprehensive ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-white/10 hover:bg-white/20 text-foreground")}>
          <a href="mailto:admin@vocalweb.club?subject=Personalized Demo Request">{t.pricing.cta}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
