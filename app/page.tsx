import Link from "next/link";
import { DiagnosisForm } from "@/app/components/diagnosis-form";

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <p className="kicker">無料・ログインなし・30秒診断</p>
        <h1>Claude Code / Codex / Cursor のどれを契約すべきか、予算と使い方から診断</h1>
        <p className="lead">
          GitHub Copilot、Cursor、Claude Code、Codexなどの中から、あなたの開発時間と使い方に合う最初のプランを提案します。
        </p>
        <div className="actions">
          <Link href="/blog/ai-coding-pricing-2026">料金比較2026</Link>
          <Link href="/blog/claude-code-vs-codex">Claude Code vs Codex</Link>
          <Link href="/blog/is-cursor-ultra-worth-it">Cursor Ultraは価値があるか</Link>
        </div>
      </section>

      <DiagnosisForm />

      <section className="section">
        <h2>契約前に読むべき記事</h2>
        <div className="article-grid">
          <article className="article-card">
            <p className="kicker">料金</p>
            <h3>AIコーディング料金比較2026</h3>
            <p>Claude Code、Codex、Cursor、GitHub Copilotを予算別に比較します。</p>
            <Link href="/blog/ai-coding-pricing-2026">記事を読む</Link>
          </article>
          <article className="article-card">
            <p className="kicker">比較</p>
            <h3>Claude Code vs Codex</h3>
            <p>CLIで使うか、ChatGPT中心で使うかを軸に選び方を整理します。</p>
            <Link href="/blog/claude-code-vs-codex">記事を読む</Link>
          </article>
          <article className="article-card">
            <p className="kicker">運用</p>
            <h3>AGENTS.mdとは</h3>
            <p>AIコーディングエージェントにプロジェクトルールを伝える方法を解説します。</p>
            <Link href="/blog/agents-md">記事を読む</Link>
          </article>
        </div>
      </section>
    </div>
  );
}
