import { Metadata } from 'next';
import { PageHeader, Stories } from '@/components/sections/shared';
import { CareersContent, JobListings } from '@/components/sections/careers';
import { Header, Footer } from '@/components/layout';
import { getActiveJobs } from '@/lib/queries/jobs';

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

export default async function CareersPage() {
  const jobs = await getActiveJobs();

  return (
    <>
      <Header />
      <PageHeader
        title={
          <>
            სამედიცინო ინდუსტრიის <br /> შესაძლებლობები
          </>
        }
      />
      <div className="pt-16 lg:pt-22">
        <CareersContent />
      </div>
      <div className="py-16 lg:py-22">
        <JobListings jobs={jobs} />
      </div>
      <Footer />
    </>
  );
}
