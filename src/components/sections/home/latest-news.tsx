import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types/blog';

interface LatestNewsProps {
  posts: BlogPost[];
}

export function LatestNews({ posts }: LatestNewsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="relative">
      <div className="absolute inset-x-0 top-0 h-[25%] lg:h-[45%] bg-primary" />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 lg:pt-18">
          {/* Headline */}
          <h2 className="text-primary text-xl font-semibold text-white sm:text-2xl uppercase">
            სიახლეები
          </h2>

          {/* Cards */}
          <div className="mt-10 grid gap-8 grid-cols-1 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-xl">
                  {post.imageUrl ? (
                    <Image
                      src={post.imageUrl}
                      alt={post.titleKa}
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
                  <h3 className="font-semibold text-2xl text-dark uppercase">
                    {post.titleKa}
                  </h3>
                  {post.subtitleKa ? (
                    <div
                      className="mt-3 text-md text-dark line-clamp-3 [&_*]:inline"
                      dangerouslySetInnerHTML={{ __html: post.subtitleKa }}
                    />
                  ) : null}
                  <p className="mt-4 text-sm text-foreground/60">
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
