import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/sections/shared';
import { BlogPostContent, RelatedPosts } from '@/components/sections/blog';
import { Header, Footer } from '@/components/layout';
import { getBlogPostBySlug, getRelatedBlogPosts } from '@/lib/queries/blog';
import { getLocale } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return { title: 'პოსტი ვერ მოიძებნა' };

  return {
    title: post.titleKa,
    description: '',
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, locale] = await Promise.all([
    getBlogPostBySlug(slug),
    getLocale(),
  ]);

  if (!post) notFound();

  const relatedPosts = await getRelatedBlogPosts(post.category, post.id);

  const isEn = locale === 'en';

  return (
    <>
      <Header />
      <PageHeader
        title="წასაკითხები და მოსასმენები"
        description="თბილისი მედიკში გარდა იმისა, რომ სამედიცინო პროდუქციის იმპორტით ვართ დაკავებულები, ძალიან გვიყვარს მედიცინა და ვცდილობთ მის გარშემო ყველა სიახლე, ინოვაცია და ამბავი მოგიყვეთ."
      />
      <div className="pt-16 lg:pt-22">
        <BlogPostContent
          post={{
            title: isEn ? post.titleEn! : post.titleKa,
            date: new Date(post.createdAt).toLocaleDateString(
              isEn ? 'en-US' : 'ka-GE',
              { year: 'numeric', month: 'long', day: 'numeric' },
            ),
            image: post.imageUrl || '',
            content: isEn ? post.contentEn! : post.contentKa,
          }}
        />
      </div>
      <div className="py-16 lg:py-22">
        <RelatedPosts
          posts={relatedPosts.map((p) => ({
            id: p.id,
            slug: p.slug,
            title: isEn ? p.titleEn! : p.titleKa,
            description: '',
            image: p.imageUrl || '',
          }))}
        />
      </div>
      <Footer />
    </>
  );
}
