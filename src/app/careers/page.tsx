import { Metadata } from 'next';
import { PageHeader, Stories } from '@/components/sections/shared';
import { CareersContent, JobListings } from '@/components/sections/careers';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'კარიერა',
  description: '',
};

const employeeStories = [
  {
    id: 1,
    title: 'ელენე ბუაჩიძე | მთავარი იურისტი',
    description:
      'გაიგეთ მეტი თბილისი მედიკის მთავარი იურისტის, ელენე ბუაჩიძის მედიკური მოგზაურობის შესახებ.',
    image: '/images/categories/1.jpg',
    href: '/',
  },
  {
    id: 2,
    title: 'დავით ჯიშკარიანი | მარკეტინგის გუნდის ხელმძღვანელი',
    description:
      'გაიგეთ მეტი თბილისი მედიკის მარკეტინგის ხელმძღვანელის, დავით ჯიშკარიანის მედიკური მოგზაურობის შესახებ.',
    image: '/images/categories/2.jpg',
    href: '/',
  },
  {
    id: 3,
    title: 'გოგა მაზიაშვილი | საოპერაციო დირექტორი',
    description:
      'გაიგეთ მეტი თბილისი მედიკის საოპერაციო დირექტორის, გოგა მაზიაშვილის მედიკური მოგზაურობის შესახებ.',
    image: '/images/categories/3.jpg',
    href: '/',
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="მედიკი"
        description='მედიკში ვაერთიანებთ ბაზრისთვის უპრეცედენტო რაოდენობის პროფესიონალებს, რომლებიც სხვადასხვა კარიერული გზით შემოგვიერთდნენ და ჩვენთან სრულფასოვან "მედიკელებად" ჩამოყალიბდნენ.'
      />
      <CareersContent />
      <Stories
        title="ადამიანების დღიურები"
        description="გაიგეთ ადამიანების ყოველდღიურობაზე, პროფესიულ გზაზე და პირად გამოცდილებაზე. ამ დღიურების დახმარებით  გაეცნობით ადამიანებს კომპანიის მიღმა - მათ ხედვებს, გამოწვევებსა და მოტივაციას, რაც ქმნის უფრო ახლო, ავთენტურ და ადამიანურ სურათს ორგანიზაციის შიდა კულტურის შესახებ."
        stories={employeeStories}
      />
      <JobListings />
      <Footer />
    </>
  );
}
