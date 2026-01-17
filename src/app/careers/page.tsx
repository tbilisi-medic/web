import { Metadata } from 'next';
import { PageHeader, Stories } from '@/components/sections/shared';
import {
  CareersContent,
  Benefits,
  JobListings,
} from '@/components/sections/careers';

export const metadata: Metadata = {
  title: 'კარიერა',
  description: '',
};

const employeeStories = [
  {
    id: 1,
    title: 'ვარსქენ პიტიახში | იურისტი',
    description:
      'გაიგეთ მეტი თბილისი მედიკის მთავარი იურისტის, ვარსქენ პიტიახშის მედიკური გამოცდილების შესახებ.',
    image: '/images/categories/1.jpg',
    href: '/',
  },
  {
    id: 2,
    title: 'ვარსქენ პიტიახში | იურისტი',
    description:
      'გაიგეთ მეტი თბილისი მედიკის მთავარი იურისტის, ვარსქენ პიტიახშის მედიკური გამოცდილების შესახებ.',
    image: '/images/categories/2.jpg',
    href: '/',
  },
  {
    id: 3,
    title: 'ვარსქენ პიტიახში | იურისტი',
    description:
      'გაიგეთ მეტი თბილისი მედიკის მთავარი იურისტის, ვარსქენ პიტიახშის მედიკური გამოცდილების შესახებ.',
    image: '/images/categories/3.jpg',
    href: '/',
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader title="კარიერა" />
      <CareersContent />
      <Stories
        title="ადამიანების დღიურები"
        description="გაიგეთ ადამიანების ყოველდღიურობაზე, პროფესიულ გზაზე და პირად გამოცდილებაზე. ამ სტატიების საშუალებით მკითხველი გაეცნობა ადამიანებს კომპანიის მიღმა, მათ ხედვებს, გამოწვევებსა და მოტივაციას, რაც ქმნის უფრო ახლო, ავთენტურ და ადამიანურ სურათს ორგანიზაციის შიდა კულტურის შესახებ."
        stories={employeeStories}
      />
      <Benefits />
      <JobListings />
    </>
  );
}
