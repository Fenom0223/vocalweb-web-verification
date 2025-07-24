import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Pricing from '@/components/sections/pricing';
import Faq from '@/components/sections/faq';
import Cta from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
