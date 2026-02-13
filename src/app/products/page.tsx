import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';
import { ProductCatalog, ContactForm } from '@/components/sections/products';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'კლინიკებისთვის',
  description: '',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="ციფრული კატალოგი"
        description="აღმოაჩინეთ თქვენი კლინიკისა თუ ბიზნესის საჭიროებებზე მორგებული, მრავალფეროვანი, მაღალი ხარისხისა და სანდოობის მქონე სამედიცინო პროდუქცია ჩვენს განახლებულ ციფრულ კატალოგში"
      />
      <div className="pt-16 lg:pt-22">
        <ProductCatalog />
      </div>
      <div className="py-16 lg:py-22">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
