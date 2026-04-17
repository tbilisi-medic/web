import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: string;
  slug: string;
  title: string;
  image: string;
  createdAt: Date;
}

interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <div className="flex items-center justify-between">
            <h2 className="text-dark text-xl font-semibold sm:text-2xl uppercase">
              აუცილებლად წასაკითხი
            </h2>
            <Link
              href="/blog"
              className="text-md text-primary-dark hover:opacity-90 transition-opacity"
            >
              ყველა სტატიის ნახვა
            </Link>
          </div>

          {/* Posts Grid */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-xl border border-primary-light/50 bg-white shadow-sm"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] lg:aspect-[4/3] overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gray-100 text-foreground/30">
                      სურათი არ მოიძებნა
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="text-2xl text-primary uppercase">
                    {post.title}
                  </h3>
                  <p className="mt-5 text-md text-primary">
                    {new Date(post.createdAt).toLocaleDateString('ka-GE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
