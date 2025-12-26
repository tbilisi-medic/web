import {
  Hero,
  Categories,
  TechnicalService,
  BlogPreview,
  Testimonials,
} from '@/components/sections/home';

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
