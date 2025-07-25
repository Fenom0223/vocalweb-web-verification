'use client';

import { useTranslations } from '@/hooks/use-translations';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const t = useTranslations();

  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.faq.title}</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">{t.faq.description}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {t.faq.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index+1}`} className="glassmorphism rounded-lg mb-4 px-6 border-none">
                  <AccordionTrigger className="text-left font-bold text-lg hover:no-underline text-foreground">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-2">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
