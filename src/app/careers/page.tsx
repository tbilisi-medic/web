import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';

export const metadata: Metadata = {
  title: 'კარიერა',
  description: '',
};

export default function CareersPage() {
  return <PageHeader title="კარიერა" />;
}
