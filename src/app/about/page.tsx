import {
  PageHeader,
  BlogPreview,
  Testimonials,
} from '@/components/sections/shared';
import { Metadata } from 'next';
import { AboutContent, Mission, Branches } from '@/components/sections/about';

export const metadata: Metadata = {
  title: 'კომპანიის შესახებ',
  description: '',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="ჩვენს შესახებ" />
      <AboutContent />
      <Mission />
      <BlogPreview />
      <Testimonials />
      <Branches />
    </>
  );
}
