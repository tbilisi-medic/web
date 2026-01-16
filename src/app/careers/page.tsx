import { Metadata } from 'next';
import { PageHeader, EmployeeStories } from '@/components/sections/shared';
import {
  CareersContent,
  Benefits,
  JobListings,
} from '@/components/sections/careers';

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
      <Benefits />
      <JobListings />
    </>
  );
}
