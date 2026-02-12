import {
  PageHeader,
  Quote,
  Stats,
  Stories,
} from '@/components/sections/shared';
import { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'საერთაშორისო პარტნიორები',
  description: '',
};

const partnerStories = [
  {
    id: 1,
    title: 'ლუსი ლიუ | აღმასრულებელი დირექტორი, SNIBE DIAGNOSTIC',
    description:
      'გაიგეთ, თუ რას ფიქრობენ Snibe Diagnostic-ში თბილისი მედიკთან თანამშრომლობის შესახებ.',
    image: '/images/categories/1.jpg',
    href: '/',
  },
  {
    id: 2,
    title: 'მითსუა კიშიდა | აღმასრულებელი დირექტორი, NIDEK. INC',
    description:
      'გაიგეთ, თუ რას ფიქრობენ Nidek-ში თბილისი მედიკთან თანამშრომლობის შესახებ.',
    image: '/images/categories/2.jpg',
    href: '/',
  },
  {
    id: 3,
    title: 'ი მინგშენგი | პრეზიდენტი ,COMEN MEDICAL',
    description:
      'გაიგეთ, თუ რას ფიქრობენ Comen Medical-ში თბილისი მედიკთან თანამშრომლობის შესახებ.',
    image: '/images/categories/3.jpg',
    href: '/',
  },
];

export default function PartnersPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="საერთაშორისო პარტნიორები"
        description="თბილისი მედიკში ვაერთიანებთ საერთაშორისო პარტნიორებს, რომლებიც წამყვანი სამედიცინო ქვეყნიდან შემოგვიერთდნენ და ჩვენთან ერთად ქმნიან მზარდ ადგილობრივ სამედიცინო ეკოსისტემას."
      />
      <div className="pt-16 lg:pt-24">
        <Quote
          title="პარტნიორებს"
          text={[
            'ჩვენი საერთაშორისო პარტნიორები ჩემთვის არიან პროფესიონალები, რომლებმაც აირჩიეს ხარისხი, პასუხისმგებლობა და გრძელვადიანი თანამშრომლობა ყოველდღიურ საქმიანობაში. ეს არის არჩევანი, რომელიც ნათლად ჩანს ჩვენს საერთო პროექტებში, სტანდარტებში და იმ ნდობაში, რომელსაც ერთმანეთის მიმართ ვაშენებთ.',
            'გულწრფელად ვაფასებ თითოეულ პარტნიორს - იმ გამოცდილებას და ღირებულებას, რომელსაც ერთად ვქმნით თბილისი მედიკისთვის და მთლიანად ჯანდაცვის სფეროსთვის.',
            'მადლობას გიხდით პარტნიორობისთვის, რომელიც  სცდება ერთჯერად პროექტებს და გარდაიქმნება მდგრად ურთიერთობად. სწორედ თქვენ ხართ ის ხიდი, რომელიც საერთაშორისო ინოვაციას, საუკეთესო პრაქტიკასა და ხარისხს ქართულ მედიცინასთან აკავშირებს.',
          ]}
          authorName="გიორგი მეზვრიშვილი"
          authorRole="პროდუქციის დირექტორი"
          image="/images/categories/1.jpg"
        />
      </div>
      <div className="pt-16 lg:pt-24">
        <Stats
          title="პარტნიორები რიცხვებში"
          stats={[
            {
              id: 1,
              value: '200',
              label: 'პარტნიორი',
              image: '/images/categories/1.jpg',
            },
            {
              id: 2,
              value: '30',
              label: 'მიმართულება',
              image: '/images/categories/2.jpg',
            },
            {
              id: 3,
              value: '5000',
              label: 'პროდუქტი',
              image: '/images/categories/3.jpg',
            },
          ]}
        />
      </div>
      <div className="py-16 lg:py-24">
        <Stories
          title="პარტნიორები ჩვენზე"
          description="გაიგეთ, რას ყვებიან საერთაშორისო სამედიცინო მწარმოებლები ჩვენთან თანამშრომლობასა და იმ გამოცდილებაზე, რომელიც ერთად დაგვიგროვდა. ამ შეფასებებით გაეცნობით ხედვებს, სტანდარტებსა და ღირებულებებს, რომლებიც უზრუნველყოფს კომპანიებს შორის გრძელვადიან პარტნიორობას საერთაშორისო ასპარეზზე."
          stories={partnerStories}
        />
      </div>

      <Footer />
    </>
  );
}
