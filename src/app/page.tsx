import { Categories, TechnicalService } from '@/components/sections/home';
import { Hero, Achievements, Testimonials } from '@/components/sections/shared';
import { Header, Footer } from '@/components/layout';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <TechnicalService />
      <Achievements />
      <Testimonials />
      <Footer />
    </>
  );
}
