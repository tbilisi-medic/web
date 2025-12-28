import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';
import { ProductCatalog, ContactForm } from '@/components/sections/products';

export const metadata: Metadata = {
  title: 'კლინიკებისთვის',
  description: '',
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader title="კლინიკებისთვის" />
      <ProductCatalog />
      <ContactForm />
    </>
  );
}
