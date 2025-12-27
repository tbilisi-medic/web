import {
  Categories,
  TechnicalService,
  BlogPreview,
  Testimonials,
} from '@/components/sections/home';
import { Hero } from '@/components/sections/shared';

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
