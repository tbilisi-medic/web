import { Categories, TechnicalService } from '@/components/sections/home';
import { Achievements, Testimonials } from '@/components/sections/shared';
import { Header, Footer } from '@/components/layout';
import { Hero } from '@/components/sections/home/hero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="pt-16 lg:pt-24">
        <Categories />
      </div>
      <div className="pt-16 lg:pt-24">
        <TechnicalService />
      </div>
      <div className="pt-16 lg:pt-24">
        <Achievements />
      </div>
      <div className="py-16 lg:py-24">
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
