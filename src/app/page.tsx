import { Categories, TechnicalService } from '@/components/sections/home';
import { Hero, BlogPreview, Testimonials } from '@/components/sections/shared';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <TechnicalService />
      <BlogPreview />
      <Testimonials />
    </>
  );
}
