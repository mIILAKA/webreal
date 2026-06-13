import Link from "next/link";
import {
  getRecommendation,
  officialLinks,
  parseAnswers,
  priceDataLastUpdated,
  services,
  useCaseLabels
} from "@/lib/recommendation";

type ResultPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const params = await searchParams;
  const answers = parseAnswers(params);
  const recommendation = getRecommendation(answers);

  return (
    <div className="container">
      <section className="hero">
        <p className="kicker">診断結果</p>
        <h1>おすすめは {recommendation.best.service} の {recommendation.best.plan}</h1>
        <p className="lead">
          想定月額は約 ${recommendation.estimatedMonthlyUsd}。まずはこのプランで始め、足りなくなったタイミングで上位プランを検討するのが現実的です。
        </p>
      </section>

      <section className="result-grid" aria-label="Recommendation">
        <article className="result-card primary">
          <p className="kicker">おすすめサービス</p>
          <h2>{recommendation.best.service}</h2>
          <p className="price">{recommendation.best.plan} / 約 ${recommendation.estimatedMonthlyUsd} 月</p>
          <p className="subtle">価格・制限情報の最終更新日: {recommendation.best.lastUpdated}</p>
          <p>{recommendation.best.audience}</p>
          {recommendation.best.availabilityNote ? <p className="notice">{recommendation.best.availabilityNote}</p> : null}
          <ul className="reason-list">
            {recommendation.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
          <div className="notice">
            料金や制限は変更される可能性があるため、契約前に必ず公式ページを確認してください。
          </div>
          <div className="actions">
            <a className="button" href={recommendation.best.officialUrl} target="_blank" rel="noreferrer">
              公式ページを見る
            </a>
            <Link href="/">もう一度診断する</Link>
            <Link href="/about">診断ロジックを見る</Link>
            <Link href="/blog">関連記事を見る</Link>
          </div>
        </article>

        <article className="result-card">
          <p className="kicker">入力内容</p>
          <p>月予算: ${answers.budget}</p>
          <p>開発時間: 1日 {answers.hoursPerDay} 時間、週 {answers.daysPerWeek} 日</p>
          <p>用途: {useCaseLabels[answers.useCase]}</p>
          <p>スタイル: {answers.preference === "ide" ? "IDE派" : "CLI派"} / {answers.workStyle === "solo" ? "個人開発" : "チーム"}</p>
        </article>
      </section>

      <section className="section">
        <h2>候補の比較</h2>
        <table className="compare-table">
          <thead>
            <tr>
              <th>サービス</th>
              <th>プラン</th>
              <th>月額目安</th>
              <th>最終更新日</th>
              <th>向いている人</th>
              <th>公式リンク</th>
            </tr>
          </thead>
          <tbody>
            {[recommendation.best, ...recommendation.alternatives].map((service) => (
              <tr key={service.id}>
                <td>{service.service}</td>
                <td>{service.plan}</td>
                <td>${service.monthlyUsd}</td>
                <td>{service.lastUpdated}</td>
                <td>{service.audience}</td>
                <td>
                  <a href={service.officialUrl} target="_blank" rel="noreferrer">
                    {service.sourceLabel}
                  </a>
                  {service.availabilityNote ? <p className="subtle">{service.availabilityNote}</p> : null}
                </td>
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

      <section className="section">
        <h2>全サービス一覧</h2>
        <p className="subtle">価格・制限情報の最終更新日: {priceDataLastUpdated}</p>
        <div className="article-grid">
          {services.map((service) => (
            <article className="article-card" key={service.id}>
              <p className="kicker">{service.service}</p>
              <h3>{service.plan}</h3>
              <p>約 ${service.monthlyUsd} / 月</p>
              <p>{service.audience}</p>
              <p className="subtle">最終更新日: {service.lastUpdated}</p>
              <a href={service.officialUrl} target="_blank" rel="noreferrer">
                {service.sourceLabel}
              </a>
              {service.availabilityNote ? <p className="subtle">{service.availabilityNote}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
