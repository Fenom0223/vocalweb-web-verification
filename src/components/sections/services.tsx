'use client';
import { useTranslations } from '@/hooks/use-translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Bot, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="glassmorphism text-center p-6 h-full service-card-hover">
        <CardHeader className="flex flex-col items-center">
          <div className="mb-4 p-4 bg-primary/10 rounded-full">
            {icon}
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
  )
}


export default function Services() {
  const t = useTranslations();

  const features = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: t.services.feature1.title,
      description: t.services.feature1.description
    },
    {
      icon: <SlidersHorizontal className="h-8 w-8 text-primary" />,
      title: t.services.feature2.title,
      description: t.services.feature2.description
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t.services.feature3.title,
      description: t.services.feature3.description
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      title: t.services.feature4.title,
      description: t.services.feature4.description
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">{t.services.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ServiceCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
