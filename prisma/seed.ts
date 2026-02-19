import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DIRECT_URL!,
});
const prisma = new PrismaClient({ adapter });

const categories = [
  {
    id: 'equipment',
    nameKa: 'აპარატურა',
    nameEn: 'Equipment',
    sortOrder: 0,
    subcategories: [
      { id: 'endoscopy', nameKa: 'ენდოსკოპია', nameEn: 'Endoscopy' },
      { id: 'ultrasound', nameKa: 'ექოსკოპია', nameEn: 'Ultrasound' },
      { id: 'laparoscopy', nameKa: 'ლაპაროსკოპია', nameEn: 'Laparoscopy' },
      {
        id: 'large-equipment',
        nameKa: 'მსხვილი აპარატურა',
        nameEn: 'Large Equipment',
      },
      { id: 'ophthalmology', nameKa: 'ოფთალმოლოგია', nameEn: 'Ophthalmology' },
      { id: 'radiology', nameKa: 'რადიოლოგია', nameEn: 'Radiology' },
      { id: 'medical-gas', nameKa: 'სამედიცინო აირი', nameEn: 'Medical Gas' },
      { id: 'sterilization', nameKa: 'სტერილიზაცია', nameEn: 'Sterilization' },
      { id: 'gynecology', nameKa: 'გინეკოლოგია', nameEn: 'Gynecology' },
      { id: 'cardiology', nameKa: 'კარდიოლოგია', nameEn: 'Cardiology' },
      { id: 'dermatology', nameKa: 'დერმატოლოგია', nameEn: 'Dermatology' },
      {
        id: 'ent',
        nameKa: 'ყელ-ყურ-ცხვირი',
        nameEn: 'Otorhinolaryngology (ENT)',
      },
      {
        id: 'rehabilitation',
        nameKa: 'რეაბილიტაცია',
        nameEn: 'Rehabilitation',
      },
      { id: 'neonatology', nameKa: 'ნეონატალოგია', nameEn: 'Neonatology' },
      { id: 'neurology', nameKa: 'ნევროლოგია', nameEn: 'Neurology' },
      {
        id: 'general-equipment',
        nameKa: 'ზოგადი აპარატურა',
        nameEn: 'General Equipment',
      },
    ],
  },
  {
    id: 'consumables',
    nameKa: 'სახარჯები',
    nameEn: 'Consumables',
    sortOrder: 1,
    subcategories: [
      {
        id: 'bandages-gauze',
        nameKa: 'ბინტები და მარლები',
        nameEn: 'Bandages and Gauze',
      },
      {
        id: 'disinfection-sterilization',
        nameKa: 'დეზინფექცია და სტერილიზაცია',
        nameEn: 'Disinfection and Sterilization',
      },
      { id: 'instruments', nameKa: 'ინსტრუმენტები', nameEn: 'Instruments' },
      {
        id: 'surgical-sets',
        nameKa: 'ქირურგიული ანაწყობები',
        nameEn: 'Surgical Sets',
      },
      {
        id: 'surgical-mesh-drains',
        nameKa: 'ქირურგიული ბადე და დრენაჟები',
        nameEn: 'Surgical Mesh and Drains',
      },
      {
        id: 'surgical-sutures-adhesives',
        nameKa: 'ქირურგიული ძაფები და წებო',
        nameEn: 'Surgical Sutures and Adhesives',
      },
      {
        id: 'plastic-surgery',
        nameKa: 'პლასტიკური ქირურგია',
        nameEn: 'Plastic Surgery',
      },
      {
        id: 'printer-paper',
        nameKa: 'საბეჭდი ქაღალდები',
        nameEn: 'Printer Paper',
      },
      {
        id: 'respiratory-systems',
        nameKa: 'სასუნთქი სისტემები',
        nameEn: 'Respiratory Systems',
      },
      {
        id: 'syringes-infusion',
        nameKa: 'შპრიცები და გადასხმის სისტემები',
        nameEn: 'Syringes and Infusion Systems',
      },
      { id: 'gloves', nameKa: 'ხელთათმანები', nameEn: 'Gloves' },
      {
        id: 'gowns-drapes',
        nameKa: 'ხალათები და ზეწრები',
        nameEn: 'Gowns and Drapes',
      },
    ],
  },
  {
    id: 'laboratory',
    nameKa: 'ლაბორატორია',
    nameEn: 'Laboratory',
    sortOrder: 2,
    subcategories: [
      { id: 'biochemistry', nameKa: 'ბიოქიმია', nameEn: 'Biochemistry' },
      {
        id: 'blood-gases-electrolytes',
        nameKa: 'გაზები და ელექტროლიტები',
        nameEn: 'Blood Gases and Electrolytes',
      },
      {
        id: 'auxiliary-equipment',
        nameKa: 'დამხმარე აპარატურა',
        nameEn: 'Auxiliary Equipment',
      },
      {
        id: 'veterinary-equipment',
        nameKa: 'ვეტერინალური აპარატურა',
        nameEn: 'Veterinary Equipment',
      },
      { id: 'elisa-tests', nameKa: 'ელაიზა ტესტები', nameEn: 'ELISA Tests' },
      { id: 'immunology', nameKa: 'იმუნოლოგია', nameEn: 'Immunology' },
      { id: 'coagulation', nameKa: 'კოაგულაცია', nameEn: 'Coagulation' },
      {
        id: 'lab-consumables',
        nameKa: 'სახარჯი მასალები',
        nameEn: 'Consumables',
      },
      { id: 'rapid-tests', nameKa: 'სწრაფი ტესტები', nameEn: 'Rapid Tests' },
      { id: 'urinalysis', nameKa: 'შარდი', nameEn: 'Urinalysis' },
      { id: 'hematology', nameKa: 'ჰემატოლოგია', nameEn: 'Hematology' },
    ],
  },
  {
    id: 'aesthetics',
    nameKa: 'ესთეტიკა',
    nameEn: 'Aesthetics',
    sortOrder: 3,
    subcategories: [
      { id: 'exosomes', nameKa: 'ეგზოსომები', nameEn: 'Exosomes' },
      {
        id: 'aesthetic-equipment',
        nameKa: 'ესთეტიკური აპარატურა',
        nameEn: 'Aesthetic Equipment',
      },
      {
        id: 'eye-boosters',
        nameKa: 'თვალის ბუსტერები',
        nameEn: 'Eye Boosters',
      },
      {
        id: 'hair-boosters',
        nameKa: 'თმის ბუსტერები',
        nameEn: 'Hair Boosters',
      },
      {
        id: 'lipolytics-hyaluronidase',
        nameKa: 'ლიპოლიტიკები და ჰიალურონიდაზა',
        nameEn: 'Lipolytics and Hyaluronidase',
      },
      {
        id: 'lifting-threads',
        nameKa: 'ლიფტინგის ძაფები',
        nameEn: 'Lifting Threads',
      },
      {
        id: 'face-boosters',
        nameKa: 'სახის ბუსტერები',
        nameEn: 'Face Boosters',
      },
      { id: 'body-fillers', nameKa: 'ტანის ფილერები', nameEn: 'Body Fillers' },
      {
        id: 'fillers-hyaluronic-acid',
        nameKa: 'ფილერები და ჰიალურონის მჟავა',
        nameEn: 'Fillers and Hyaluronic Acid',
      },
    ],
  },
  {
    id: 'furniture',
    nameKa: 'ავეჯი',
    nameEn: 'Furniture',
    sortOrder: 4,
    subcategories: [
      {
        id: 'patient-beds',
        nameKa: 'პაციენტის საწოლები',
        nameEn: 'Patient Beds',
      },
      {
        id: 'operating-room-furniture',
        nameKa: 'საოპერაციო ავეჯი',
        nameEn: 'Operating Room Furniture',
      },
      {
        id: 'medical-chairs',
        nameKa: 'სამედიცინო სავარძლები',
        nameEn: 'Medical Chairs',
      },
      {
        id: 'medical-trolleys',
        nameKa: 'სამედიცინო ურიკები',
        nameEn: 'Medical Trolleys',
      },
      {
        id: 'stainless-steel-furniture',
        nameKa: 'უჟანგავი მეტალის ავეჯი',
        nameEn: 'Stainless Steel Furniture',
      },
      {
        id: 'additional-accessories',
        nameKa: 'დამატებითი აქსესუარები',
        nameEn: 'Additional Accessories',
      },
    ],
  },
];

async function main() {
  console.log('Seeding categories and subcategories...');

  for (const category of categories) {
    const { subcategories, ...categoryData } = category;

    await prisma.category.upsert({
      where: { id: categoryData.id },
      update: categoryData,
      create: categoryData,
    });

    for (let i = 0; i < subcategories.length; i++) {
      const sub = subcategories[i];
      await prisma.subcategory.upsert({
        where: { id: sub.id },
        update: { ...sub, categoryId: categoryData.id, sortOrder: i },
        create: { ...sub, categoryId: categoryData.id, sortOrder: i },
      });
    }
  }

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
