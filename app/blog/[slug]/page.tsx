import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleViewEvent } from "@/app/components/article-view-event";
import { blogPosts, getBlogPost } from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-coding-plan-finder.vercel.app";
const siteName = "AI Coding Plan Finder";

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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle,
    description: post.metaDescription,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`
    },
    datePublished: post.lastUpdated,
    dateModified: post.lastUpdated,
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl
    }
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd)
        }}
      />
      <ArticleViewEvent slug={post.slug} title={post.title} category={post.category} />
      <article className="panel">
        <p className="kicker">{post.category}</p>
        <h1 className="page-title">{post.title}</h1>
        <p className="lead">{post.excerpt}</p>

        <dl className="meta-list" aria-label="記事メタ情報">
          <div>
            <dt>検索意図</dt>
            <dd>{post.searchIntent}</dd>
          </div>
          <div>
            <dt>最終更新日</dt>
            <dd>{post.lastUpdated}</dd>
          </div>
          <div>
            <dt>公式情報確認日</dt>
            <dd>{post.officialReviewedAt}</dd>
          </div>
        </dl>

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

        <section className="section" aria-labelledby="official-sources-heading">
          <h2 id="official-sources-heading">公式情報リンク</h2>
          <p className="subtle">料金、制限、提供条件は変更される可能性があります。契約前に最新の公式情報を確認してください。</p>
          <ul className="source-list">
            {post.officialSources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

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
