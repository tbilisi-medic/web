import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';

export const metadata: Metadata = {
  title: 'ბლოგი',
  description: '',
};

export default function BlogPage() {
  return (
    <>
      <PageHeader title="ბლოგი" />

      <section className="py-16 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-foreground/60"></p>
          </div>
        </div>
      </section>
    </>
  );
}
