# AI Founder Operating Guide

このリポジトリは、サイト `webreal` をAIが半自動で継続改善するための運用対象です。AIエージェントは、このファイルと `docs/` 配下の運用文書を必ず確認してから作業してください。

## 基本方針

- AIは直接 `main` にpushしない。
- 変更は必ずブランチを切り、Pull Requestで提案する。
- 1PR = 1目的にする。
- Analytics、SEO、Revenue、Content、Automationは別ブランチで作業する。
- PRサイズは原則300行以内にする。
- 大規模変更は複数PRに分割する。
- 料金、制限、仕様、公式名、契約条件、API条件など変わり得る情報は、必ず公式ソースを確認する。
- 著作権侵害、規約違反、誤情報、根拠のない断定を避ける。
- 収益化施策は、Google Search ConsoleとAnalyticsの実データを見てから優先順位を決める。
- データがない段階では機能追加を最小限にする。
- すべての変更後に `npm run lint` と `npm run build` を実行する。

## 作業前チェック

1. `git status --short` で作業ツリーを確認する。
2. 関連ファイルを読み、既存の実装・文体・構成に合わせる。
3. 外部サービス、料金、制限、規約に触れる場合は公式ソースを確認する。
4. 作業目的がAnalytics、SEO、Revenue、Content、Automationのどれに当たるか確認し、混在する場合は分割する。
5. 大きな変更は `docs/BACKLOG.md` に目的と検証方法を残す。

## 記事作成・更新ルール

記事には必ず以下を含める。

- 検索意図
- 主キーワードと関連キーワード
- 内部リンク
- FAQ
- 最終更新日
- 公式情報を確認した日付
- 価格・制限・仕様が変わる可能性の注意書き

記事の詳細手順は `docs/SEO_WORKFLOW.md` を参照する。

## 品質ゲート

変更後は必ず以下を実行する。

```bash
npm run lint
npm run build
```

失敗した場合は原因を修正し、再実行する。修正できない場合は、PR本文に失敗内容、原因仮説、次の対応を明記する。

## 参照ドキュメント

- `docs/AI_FOUNDER_SYSTEM.md`: システム全体像
- `docs/OPERATING_RULES.md`: 日常運用ルール
- `docs/CONTENT_POLICY.md`: コンテンツ安全基準
- `docs/METRICS.md`: 追跡指標
- `docs/WEEKLY_REPORT_TEMPLATE.md`: 週次レポート雛形
- `docs/EXPERIMENTS.md`: 実験ログ
- `docs/LEGAL_CHECKLIST.md`: 法務・規約確認
- `docs/SEO_WORKFLOW.md`: SEO改善手順
- `docs/WEEKLY_REVIEW.md`: 週次レビュー手順
- `docs/BACKLOG.md`: 改善候補
