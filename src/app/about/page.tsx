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
      <PageHeader
        title={
          <>
            სამედიცინო ინდუსტრიის <br /> კვალიფიციური პარტნიორი
          </>
        }
      />
      <div className="pt-16 lg:pt-22">
        <AboutContent />
      </div>
      <div className="pt-16 lg:pt-22">
        <Mission withBackground />
      </div>
      <div className="py-16 lg:py-22">
        <Achievements />
      </div>
      <Footer />
    </>
  );
}
