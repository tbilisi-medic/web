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
      <PageHeader title="კლინიკებისთვის" />
      <ProductCatalog />
      <ContactForm />
      <Footer />
    </>
  );
}
