import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <section className="panel">
        <p className="kicker">404</p>
        <h1 className="page-title">ページが見つかりません</h1>
        <p className="lead">
          URLが変更されたか、まだ公開されていないページです。診断フォームまたは記事一覧から目的のページを探してください。
        </p>
        <div className="actions">
          <Link className="button" href="/">
            診断フォームへ
          </Link>
          <Link href="/blog">記事一覧へ</Link>
        </div>
      </section>
    </div>
  );
}
