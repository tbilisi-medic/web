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
      <AboutContent />
      <Mission />
      <Achievements />
      <Testimonials />
      <Branches />
      <Footer />
    </>
  );
}
