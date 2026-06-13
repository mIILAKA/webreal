import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: "article"
    },
    twitter: {
      card: "summary",
      title: post.seoTitle,
      description: post.metaDescription
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <article className="panel">
        <p className="kicker">{post.category}</p>
        <h1 className="page-title">{post.title}</h1>
        <p className="lead">{post.excerpt}</p>

        <div className="notice">
          先に自分の予算と開発スタイルを確認したい場合は、無料診断ツールから始められます。
        </div>

        <div className="actions">
          <Link className="button" href="/">
            診断する
          </Link>
          <Link href="/blog/ai-coding-pricing-2026">料金比較2026</Link>
        </div>

        <div className="section">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section className="section" aria-labelledby="faq-heading">
          <h2 id="faq-heading">FAQ</h2>
          {post.faq.map((item) => (
            <div className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>

        <section className="section" aria-labelledby="related-heading">
          <h2 id="related-heading">関連記事</h2>
          <div className="article-grid">
            {post.relatedSlugs.map((relatedSlug) => {
              const related = getBlogPost(relatedSlug);
              if (!related) {
                return null;
              }

              return (
                <article className="article-card" key={related.slug}>
                  <p className="kicker">{related.primaryKeyword}</p>
                  <h3>{related.title}</h3>
                  <p>{related.excerpt}</p>
                  <Link href={`/blog/${related.slug}`}>記事を読む</Link>
                </article>
              );
            })}
          </div>
        </section>

        <div className="notice">
          料金や制限は変更される可能性があるため、契約前に必ず公式ページを確認してください。
        </div>
        <div className="actions">
          <Link className="button" href="/">
            診断する
          </Link>
          <Link href="/blog">記事一覧へ</Link>
          <Link href="/about">診断ロジックを見る</Link>
        </div>
      </article>
    </div>
  );
}
