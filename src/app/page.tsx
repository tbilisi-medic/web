import { Categories, TechnicalService } from '@/components/sections/home';
import { Hero, Achievements, Testimonials } from '@/components/sections/shared';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <TechnicalService />
      <Achievements />
      <Testimonials />
    </>
  );
}
