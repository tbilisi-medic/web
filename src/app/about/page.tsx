import {
  PageHeader,
  Achievements,
  Testimonials,
} from '@/components/sections/shared';
import { Metadata } from 'next';
import { AboutContent, Mission, Branches } from '@/components/sections/about';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'კომპანიის შესახებ',
  description: '',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHeader title="ჩვენს შესახებ" />
      <AboutContent />
      <Mission />
      <Achievements />
      <Testimonials />
      <Branches />
      <Footer />
    </>
  );
}
