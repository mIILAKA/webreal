import Link from "next/link";
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <article className="panel">
        <p className="kicker">Draft</p>
        <h1 className="page-title">{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <div className="section">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="notice">
          この記事は公開初期の下書きです。料金や制限は変更される可能性があるため、契約前に必ず公式ページを確認してください。
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
