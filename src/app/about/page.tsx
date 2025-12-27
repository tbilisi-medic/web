import { Hero } from '@/components/sections/shared';
import { Metadata } from 'next';
import { AboutContent, Mission } from '@/components/sections/about';

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
    </>
  );
}
