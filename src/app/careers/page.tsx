import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';
import { CareersContent, EmployeeStories } from '@/components/sections/careers';

export const metadata: Metadata = {
  title: 'კარიერა',
  description: '',
};

export default function CareersPage() {
  return (
    <>
      <PageHeader title="კარიერა" />
      <CareersContent />
      <EmployeeStories />
    </>
  );
}
