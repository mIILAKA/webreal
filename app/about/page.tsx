import Link from "next/link";
import { officialLinks, priceDataLastUpdated, services } from "@/lib/recommendation";

export default function AboutPage() {
  return (
    <div className="container">
      <section className="hero">
        <p className="kicker">About</p>
        <h1>診断ロジック</h1>
        <p className="lead">
          AI Coding Plan Finder は、最初の利用者が迷わず課金判断できるように、細かい機能差よりも予算、開発時間、IDE/CLIの好みを優先して判定します。
        </p>
        <div className="actions">
          <Link className="button" href="/">
            診断する
          </Link>
          <Link href="/blog/ai-coding-pricing-2026">料金比較2026</Link>
          <Link href="/blog/agents-md">AGENTS.mdとは</Link>
        </div>
      </section>

      <section className="panel">
        <h2>判定の優先順位</h2>
        <ol>
          <li>月予算に収まること</li>
          <li>IDE派ならエディタ内体験、CLI派ならターミナル作業のしやすさ</li>
          <li>個人開発なら低コスト、チームなら管理機能やチーム向けプラン</li>
          <li>週の開発時間が長い場合は、Agent的に長めの作業を任せやすいプラン</li>
        </ol>

        <h2>価格・制限情報</h2>
        <p className="subtle">最終更新日: {priceDataLastUpdated}</p>
        <table className="compare-table">
          <thead>
            <tr>
              <th>サービス</th>
              <th>プラン</th>
              <th>月額目安</th>
              <th>公式リンク</th>
              <th>注記</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.service}</td>
                <td>{service.plan}</td>
                <td>${service.monthlyUsd}</td>
                <td>
                  <a href={service.officialUrl} target="_blank" rel="noreferrer">
                    {service.sourceLabel}
                  </a>
                </td>
                <td>{service.availabilityNote ?? "なし"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="notice">
          料金や制限は変更される可能性があるため、契約前に必ず公式ページを確認してください。
        </div>
      </section>

      <section className="section">
        <h2>公式リンク</h2>
        <div className="article-grid">
          {officialLinks.map((link) => (
            <article className="article-card" key={link.href}>
              <p className="kicker">Official</p>
              <h3>{link.label}</h3>
              <a href={link.href} target="_blank" rel="noreferrer">
                公式ページを開く
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
