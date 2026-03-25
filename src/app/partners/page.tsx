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
        description="250-ზე მეტი საერთაშორისო პარტნიორი და სამედიცინო მწარმოებელი მსოფლიოს მასშტაბით"
      />
      <div className="pt-16 lg:pt-22">
        <Quote
          title="პარტნიორებს"
          text={[
            'ჩვენი საერთაშორისო პარტნიორები არიან პროფესიონალები, რომლებმაც აირჩიეს ხარისხი, პასუხისმგებლობა და გრძელვადიანი თანამშრომლობა ყოველდღიურ საქმიანობაში. ეს არის არჩევანი, რომელიც ნათლად იკვეთება ჩვენს საერთო პროექტებში, სტანდარტებში და იმ ნდობაში, რომელსაც ერთმანეთის მიმართ ვაშენებთ.',
            'გულწრფელად ვაფასებ თითოეულ პარტნიორს - იმ გამოცდილებას და ღირებულებას, რომელსაც ერთად ვქმნით მედიკისთვის და მთლიანად ჯანდაცვის სფეროსთვის.',
            'მადლობას გიხდით პარტნიორობისთვის, რომელიც სცდება ერთჯერად პროექტებს და გარდაიქმნება მდგრად ურთიერთობად. სწორედ თქვენ ხართ ის ხიდი, რომელიც საერთაშორისო ინოვაციას, საუკეთესო პრაქტიკასა და ხარისხს ქართულ მედიცინასთან აკავშირებს. ',
            'ჩვენთვის განსაკუთრებით მნიშვნელოვანია, რომ ეს თანამშრომლობა არ შემოიფარგლება მხოლოდ ბიზნეს ურთიერთობით. იგი ეფუძნება საერთო ხედვას, განვითარებაზე ორიენტირებულ მიდგომასა და მუდმივ სწრაფვას უკეთესი შედეგებისკენ. თითოეული ერთობლივი ნაბიჯი აძლიერებს არა მხოლოდ ჩვენს პარტნიორობას, არამედ მთლიანად იმ ეკოსისტემას, რომელსაც ერთად ვაშენებთ.',
          ]}
          authorName="გიორგი მეზვრიშვილი"
          authorRole="პროდუქტის მთავარი ოფიცერი"
          image="/images/categories/1.jpg"
        />
      </div>
      <div className="pt-16 lg:pt-22">
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
      <div className="py-16 lg:py-22">
        <Stories title="პარტნიორები ჩვენზე" stories={partnerStories} />
      </div>

      <Footer />
    </>
  );
}
