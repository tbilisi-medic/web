import Image from 'next/image';

interface BlogPostContentProps {
  post: {
    title: string;
    date: string;
    image: string;
    content: string;
  };
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <section>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <h1 className="text-2xl mx-auto text-center font-bold text-primary sm:text-[40px] uppercase">
            {post.title}
          </h1>

          {/* Date */}
          <p className="mt-3 text-center text-md text-primary">{post.date}</p>

          {/* Image */}
          <div className="mt-12 relative h-64 overflow-hidden rounded-xl bg-gray-200 sm:h-80 lg:h-90">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-foreground/30">
                სურათი არ მოიძებნა
              </div>
            )}
          </div>

          {/* Content */}
          <div
            className="prose prose-md mt-15 max-w-none text-primary break-words
  prose-headings:text-primary
  prose-strong:text-primary
  prose-a:text-primary
  prose-li:text-primary
  prose-ol:text-primary
  prose-ul:text-primary
  prose-blockquote:text-primary
  prose-h2:mt-10 prose-h2:text-xl lg:prose-h2:text-2xl
  prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </section>
  );
}
