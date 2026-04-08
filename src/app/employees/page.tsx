import { Metadata } from 'next';
import {
  PageHeader,
  Quote,
  Stats,
  Stories,
} from '@/components/sections/shared';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'თანამშრომლები ',
  description: '',
};

const employeeStories = [
  {
    id: 1,
    title: 'მარი ბუტულაშვილი | ადამიანური რესურსების მენეჯერი',
    description:
      'გაიგეთ მეტი მედიკის ადამიანური რესურსების მართვის მენეჯერის, ხელმძღვანელის, მარი ბუტულაშვილის მედიკური მოგზაურობის შესახებ.',
    image: '/images/stories/2.jpg',
    href: '/blog/mari-butulashvili-chief-human-resources-officer',
  },
];

export default function EmployeesPage() {
  return (
    <>
      <Header />
      <PageHeader
        title={
          <>
            პროფესიონალები, რომლებიც <br /> ქმნიან მედიკს
          </>
        }
      />
      <div className="pt-16 lg:pt-22">
        <Quote
          title="მედიკელებს"
          text={[
            'მედიკელები ჩემთვის არიან ადამიანები, რომლებმაც აირჩიეს პასუხისმგებლობა, ერთგულება და ხარისხი ყოველდღიურ საქმიანობაში. ეს არის არჩევანი, რომელიც თითოეულ თქვენგანში ყოველდღიურად ჩანს - თქვენს დამოკიდებულებაში ჯანდაცვის სპეციალისტების, კოლეგებისა და საკუთარი პროფესიის მიმართ. მე გულწრფელად ვამაყობ თითოეული მედიკელით - იმ გზით, რომელსაც თქვენს გადიხართ და იმ სტანდარტით, რომელსაც დღეს ერთად ვქმნით.',

            'მადლობა თქვენი შრომის, პროფესიონალიზმისა და იმ ადამიანურობისთვის, რომელიც საფუძველია მედიკის საქმიანობისთვის. სწორედ თქვენ ქმნით იმ ნდობასა და ღირებულებას, რის გამოც ჩვენი კომპანია დღეს არა უბრალოდ სამედიცინო დაწესებულება, არამედ ხიდია საერთშორისო გამოცდილებასა და ქართულ მედიცინას შორის.',

            'მადლობა თქვენი შრომის, პროფესიონალიზმისა და იმ ადამიანურობისთვის, რომელიც საფუძველია მედიკის საქმიანობისთვის.',

            'სწორედ თქვენ ქმნით იმ ნდობასა და ღირებულებას, რის გამოც ჩვენი ორგანიზაცია დღეს არა უბრალოდ სამედიცინო დაწესებულება, არამედ სამედიცინო ინდუსტრიის კვალიფიციური პარტნიორია.',
          ]}
          authorName="ლევან ხომერიკი"
          authorRole="გენერალური დირექტორი"
          image="/images/achievements/1.jpg"
        />
      </div>
      <div className="pt-16 lg:pt-22">
        <Stats
          title="თანამშრომლები რიცხვებში"
          stats={[
            {
              id: 1,
              value: '85+',
              label: 'თანამშრომელი',
              image: '/images/employees/1.jpg',
            },
            {
              id: 2,
              value: '10',
              label: 'დამოუკიდებელი გუნდი',
              image: '/images/employees/2.jpg',
            },
            {
              id: 3,
              value: '92%',
              label: 'ENPS ინდექსი',
              image: '/images/employees/3.jpg',
            },
          ]}
        />
      </div>
      <div className="py-16 lg:py-22">
        <Stories
          title="ადამიანების დღიურები"
          stories={employeeStories}
          showMoreHref="/blog?category=diaries"
        />
      </div>

      <Footer />
    </>
  );
}
