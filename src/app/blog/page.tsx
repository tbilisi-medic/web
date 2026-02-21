import { Metadata } from 'next';
import { PageHeader } from '@/components/sections/shared';
import { BlogPosts } from '@/components/sections/blog';
import { Header, Footer } from '@/components/layout';
import { getPublicBlogPosts } from '@/lib/queries/blog';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'ბლოგი',
  description: '',
};

export default async function BlogPage() {
  const [posts, locale] = await Promise.all([
    getPublicBlogPosts(),
    getLocale(),
  ]);

  return (
    <>
      <Header />
      <PageHeader
        title="წასაკითხები და მოსასმენები"
        description="თბილისი მედიკში გარდა იმისა, რომ სამედიცინო პროდუქციის იმპორტით ვართ დაკავებულები, ძალიან გვიყვარს მედიცინა და ვცდილობთ მის გარშემო ყველა სიახლე, ინოვაცია და ამბავი მოგიყვეთ."
      />
      <div className="py-16 lg:py-22">
        <BlogPosts posts={posts} locale={locale} />
      </div>
      <Footer />
    </>
  );
}
