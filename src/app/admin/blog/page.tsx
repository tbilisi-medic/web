import { getBlogPosts } from './actions';
import { AdminHeader } from '@/components/admin';
import { AdminBlogClient } from '@/components/admin/admin-blog-client';

export default async function AdminBlogPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const posts = await getBlogPosts(search);

  return (
    <>
      <AdminHeader title="ბლოგი" />
      <div className="flex-1 p-4">
        <div className="mx-auto w-full max-w-7xl">
          <AdminBlogClient posts={posts} />
        </div>
      </div>
    </>
  );
}
