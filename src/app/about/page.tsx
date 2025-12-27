import { Hero } from '@/components/sections/shared';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'კომპანიის შესახებ',
  description: '',
};

export default function AboutPage() {
  return (
    <>
      <Hero />
    </>
  );
}
