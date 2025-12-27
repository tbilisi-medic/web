import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';

export const metadata: Metadata = {
  title: 'კლინიკებისთვის',
  description: '',
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader title="კლინიკებისთვის" />
    </>
  );
}
