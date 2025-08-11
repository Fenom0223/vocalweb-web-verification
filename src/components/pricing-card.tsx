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
    <div
      className={cn(
        "product-card-container h-full rounded-lg",
        isComprehensive && "md:col-span-2 lg:col-span-1" 
      )}
    >
      <div className="product-card rounded-lg h-full p-px">
        <div className="product-card-content-wrapper rounded-lg flex flex-col h-full">
            <CardHeader className="pb-4">
              <CardTitle className={cn("text-2xl font-bold title-gradient title-glow")}>
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
                <div className="mt-6 pt-6 border-t border-primary/20 space-y-3">
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
              <Button asChild className="w-full button-glow" variant={isComprehensive ? 'default' : 'secondary'}>
                <a href="mailto:admin@vocalweb.club?subject=Personalized Demo Request">{t.pricing.cta}</a>
              </Button>
            </CardFooter>
        </div>
      </div>
    </div>
  );
}
