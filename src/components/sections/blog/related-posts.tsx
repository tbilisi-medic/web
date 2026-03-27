import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
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
          <h2 className="text-primary text-xl font-semibold text-foreground sm:text-2xl uppercase">
            აუცილებლად წასაკითხი
          </h2>

          {/* Posts Grid */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-foreground/30">
                      სურათი არ მოიძებნა
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="mt-5">
                  <h3 className="font-semibold text-2xl text-primary uppercase">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-md text-primary line-clamp-3">
                    {post.description}
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
