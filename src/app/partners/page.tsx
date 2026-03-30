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
    title: 'ZÜLFIKAR TUFAN, DIRECTOR',
    description:
      'It is our pleasure to be a partner of Medic. We are glad with their support in the Georgian market as well as with their corporate and visionary approach. We also thank them for their professional support in the workshop events held both in Georgia and Türkiye.',
    image: '/images/categories/1.jpg',
    href: '/',
  },
  {
    id: 2,
    title: 'MASAHIRO WASA, GENERAL MANAGER',
    description:
      'Medic is truly one of our most outstanding partners and I feel genuinely proud and grateful to work with such a dedicated team. The success they have achieved in Georgia, a country with fewer than four million people is not only impressive, but also a clear reflection of their hard work, passion and commitment.',
    image: '/images/categories/2.jpg',
    href: '/',
  },
  {
    id: 3,
    title: 'GANPIETRO MANGONE, PRODUCT SPECIALIST',
    description:
      'გაიგეთ მეტი თბილისი მედიკის მთავარი იურისტის, ელენე ბუაჩიძის მედიკური მოგზაურობის შესახებ.',
    image: '/images/categories/3.jpg',
    href: '/',
  },
];

export default function PartnersPage() {
  return (
    <>
      <Header />
      <PageHeader title="პარტნიორები მთელი მსოფლიოს მასშტაბით" />
      <div className="pt-16 lg:pt-22">
        <Quote
          title="პარტნიორებს"
          text={[
            'ჩვენი საერთაშორისო პარტნიორები არიან პროფესიონალები, რომლებმაც აირჩიეს ხარისხი, პასუხისმგებლობა და გრძელვადიანი თანამშრომლობა ყოველდღიურ საქმიანობაში. ეს არის არჩევანი, რომელიც ნათლად იკვეთება ჩვენს საერთო პროექტებში, სტანდარტებში და იმ ნდობაში, რომელსაც ერთმანეთის მიმართ ვაშენებთ.',

            'გულწრფელად ვაფასებ თითოეულ პარტნიორსგან მიღებულ გამოცდილებას და ღირებულებას, რომელსაც ერთად ვქმნით მედიკისა და მთლიანად სამედიცინო ინდუსტრიისთვის.',

            'მადლობას გიხდით პარტნიორობისთვის, რომელიც სცდება ერთჯერად პროექტებს და გარდაიქმნება მდგრად ურთიერთობად. სწორედ თქვენ გვეხმარებით სამედიცინო ეკოსისტემის სრულყოფაში.',

            'განსაკუთრებით მნიშვნელოვანია, რომ ეს თანამშრომლობა არ შემოიფარგლება მხოლოდ ბიზნეს ურთიერთობით. ის ეფუძნება საერთო ხედვას, განვითარებაზე ორიენტირებულ მიდგომასა და მუდმივ სწრაფვას უკეთესი შედეგებისკენ.',

            'თითოეული ერთობლივი ნაბიჯი გვაქცევს სამედიცინო ინდუსტრიის კვალიფიციურ პარტნიორად.',
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
              value: '200+',
              label: 'პარტნიორი',
              image: '/images/categories/1.jpg',
            },
            {
              id: 2,
              value: '55+',
              label: 'მიმართულება',
              image: '/images/categories/2.jpg',
            },
            {
              id: 3,
              value: '3000+',
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
