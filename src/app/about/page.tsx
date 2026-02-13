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
        title="მედიკი"
        description='თბილისი მედიკში ვაერთიანებთ ბაზრისთვის უპრეცედენტო რაოდენობის პროფესიონალებს, რომლებიც სხვადასხვა კარიერული გზით შემოგვიერთდნენ და ჩვენთან სრულფასოვან "მედიკელებად" ჩამოყალიბდნენ.'
      />
      <div className="pt-16 lg:pt-22">
        <AboutContent />
      </div>
      <div className="pt-16 lg:pt-22">
        <Mission />
      </div>
      <div className="pt-16 lg:pt-22">
        <Achievements />
      </div>
      <div className="pt-16 lg:pt-22">
        <Testimonials />
      </div>
      <div className="py-16 lg:py-22">
        <Branches />
      </div>
      <Footer />
    </>
  );
}
