import {
  PageHeader,
  Quote,
  Stats,
  Testimonials,
} from '@/components/sections/shared';
import { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'ადგილობრივი მომხმარებლები',
  description: '',
};

export default function CustomersPage() {
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
        <Quote
          title="მომხმარებლებს"
          text={[
            'ჩვენი მომხმარებლები არიან ადამიანები, რომლებმაც აირჩიეს პასუხისმგებლიანი დამოკიდებულება საკუთარი ბიზნესებისა და ძვირფასი პაციენტების ჯანმრთელობის მიმართ. ეს არის არჩევანი, რომელიც ყოველდღიურად გვავალდებულებს, თითოეულ დეტალში დავიცვათ მაღალი სტანდარტები.',

            'გულწრფელად მადლობელები ვართ თქვენი ჩვენდამი ნდობისთვის იმ გზაზე, რომელსაც ჩვენთან ერთად გადიხართ და იმ ურთიერთობისთვის, რომელიც დროთა განმავლობაში გრძელვადიან პარტნიორობად ყალიბდება.',

            'წარსულში თქვენგან მიღებული უკუკავშირი, მოლოდინები და გამოცდილება არის ის საფუძველი, რომლის მიხედვითაც ვაყალიბებთ მედიკის ორგანიზაციულ ხედვასა და მისიას.',

            'ჩვენთვის მნიშვნელოვანია, რომ თითოეული ურთიერთობა იყოს არა მხოლოდ კომერციულ პარტნიორობაზე დამყარებული, არამედ ნდობაზე, გამჭვირვალობასა და ურთიერთპატივისცემაზე.',

            'სწორედ ეს გვაქცევს სამედიცინო ინდუსტრიისთვის საიმედო და კვალიფიურ პარტნიორად.',
          ]}
          authorName="დავით ჯიშკარიანი"
          authorRole="მარტკეტინგის მთავარი ოფიცერი"
          image="/images/customers/1.jpg"
        />
      </div>
      <div className="pt-16 lg:pt-22">
        <Stats
          title="მომხმარებლები რიცხვებში"
          stats={[
            {
              id: 1,
              value: '350+',
              label: 'მომხმარებელი',
              image: '/images/customers/2.jpg',
            },
            {
              id: 2,
              value: '92%',
              label: 'შენარჩუნების ინდექსი',
              image: '/images/customers/3.jpg',
            },
            {
              id: 3,
              value: '95%',
              label: 'NPS ინდექსი',
              image: '/images/customers/4.jpg',
            },
          ]}
          withBackground
        />
      </div>
      <div className="py-16 lg:py-22">
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
