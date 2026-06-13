import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <div className="container">
      <section className="hero">
        <p className="kicker">Blog</p>
        <h1>記事一覧</h1>
        <p className="lead">公開初期の下書き記事です。検索流入を見ながら、診断結果と連動する記事に育てていきます。</p>
        <div className="actions">
          <Link className="button" href="/">
            診断する
          </Link>
          <Link href="/about">診断ロジックを見る</Link>
        </div>
      </section>

      <section className="article-grid">
        {blogPosts.map((post) => (
          <article className="article-card" key={post.slug}>
            <p className="kicker">Draft</p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>下書きを読む</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
