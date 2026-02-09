import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';
import { BlogPosts } from '@/components/sections/blog';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'ბლოგი',
  description: '',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="წასაკითხები და მოსასმენები"
        description="თბილისი მედიკში გარდა იმისა, რომ სამედიცინო პროდუქციის იმპორტით ვართ დაკავებულები, ძალიან გვიყვარს მედიცინა და ვცდილობთ მის გარშემო ყველა სიახლე, ინოვაცია და ამბავი მოგიყვეთ."
      />
      <BlogPosts />
      <Footer />
    </>
  );
}
