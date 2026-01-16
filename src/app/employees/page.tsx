import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';

export const metadata: Metadata = {
  title: 'თანამშრომლები ',
  description: '',
};

export default function EmployeesPage() {
  return (
    <>
      <PageHeader
        title="თანამშრომლები"
        description="თბილისი მედიკში ვაერთიანებთ ბაზრისთვის უპრეცედენტო რაოდენობის პროფესიონალებს, რომლებიც სხვადასხვა კარიერული გზით შემოგვიერთდნენ და ჩვენთან სრულფასოვან „მედიკელებად“ ჩამოყალიბდნენ."
      />
    </>
  );
}
