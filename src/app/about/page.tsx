import { Hero, BlogPreview, Testimonials } from '@/components/sections/shared';
import { Metadata } from 'next';
import { AboutContent, Mission, Branches } from '@/components/sections/about';

export const metadata: Metadata = {
  title: 'კომპანიის შესახებ',
  description: '',
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <AboutContent />
      <Mission />
      <BlogPreview />
      <Testimonials />
      <Branches />
    </>
  );
}
