import Link from "next/link";
import { blogCategories, blogPosts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <div className="container">
      <section className="hero">
        <p className="kicker">Blog</p>
        <h1>AIコーディングの比較・料金・運用ガイド</h1>
        <p className="lead">
          Claude Code、Codex、Cursorの料金や使い分けを、個人開発者が契約前に判断できる形で整理しています。
        </p>
        <div className="actions">
          <Link className="button" href="/">
            診断する
          </Link>
          <Link href="/blog/ai-coding-pricing-2026">料金比較2026</Link>
          <Link href="/blog/claude-code-vs-codex">Claude Code vs Codex</Link>
        </div>
      </section>

      {blogCategories.map((category) => (
        <section className="section" key={category}>
          <h2>{category}の記事</h2>
          <div className="article-grid">
            {blogPosts
              .filter((post) => post.category === category)
              .map((post) => (
                <article className="article-card" key={post.slug}>
                  <p className="kicker">{post.primaryKeyword}</p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>記事を読む</Link>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
