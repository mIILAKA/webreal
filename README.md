# AI Coding Plan Finder

月予算、開発時間、用途、IDE/CLIの好みから、AIコーディングサービスの最初の課金プランを診断するMVPです。

## 技術構成

- Next.js
- TypeScript
- DBなし
- ログインなし
- Vercelの無料枠で公開可能

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## ページ

- `/` 診断フォーム
- `/result` 診断結果
- `/about` 診断ロジック説明
- `/blog` 記事一覧
- `/blog/start-ai-coding-plan` 下書き記事
- `/blog/cursor-vs-github-copilot` 下書き記事
- `/blog/cli-ai-coding-tools` 下書き記事
- `/robots.txt`
- `/sitemap.xml`

## 診断ロジック

ロジックは `lib/recommendation.ts` に集約しています。

主な判定軸:

- 月予算に収まるか
- IDE派かCLI派か
- 個人開発かチーム利用か
- 週の開発時間が軽め、通常、重めのどれか
- 主な用途がMVP開発、学習、リファクタ、レビューのどれか

価格・制限情報の最終更新日は `priceDataLastUpdated` で管理しています。料金や制限は変更される可能性があるため、契約前には公式ページを確認してください。

## 環境変数

任意で `NEXT_PUBLIC_SITE_URL` を設定できます。

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

未設定の場合は `https://ai-coding-plan-finder.vercel.app` をOGP、robots、sitemapのURLに使います。独自ドメインやVercelの正式URLが決まったら、本番環境変数に設定してください。

Google Analytics 4を使う場合は、GA4の測定IDを `NEXT_PUBLIC_GA_ID` に設定します。

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

未設定の場合、GA4スクリプトとイベント送信は無効になり、サイトは通常どおり動作します。

## GA4設定手順

1. Google AnalyticsでGA4プロパティを作成します。
2. Webデータストリームを追加し、測定ID（`G-` で始まるID）を控えます。
3. VercelのEnvironment Variablesに `NEXT_PUBLIC_GA_ID` を追加します。
4. 再デプロイします。
5. GA4のリアルタイムレポートで初回アクセスとページ閲覧を確認します。
6. 診断フォームを送信し、`diagnosis_submit` イベントが記録されることを確認します。
7. 記事ページを開き、`article_view` イベントが記録されることを確認します。

計測できる主な項目:

- 初アクセスと流入元: GA4の標準ページビューで確認
- 記事閲覧: `article_view`
- 診断ツール利用: `diagnosis_submit`

## Vercel公開前チェックリスト

- [ ] `npm install` が成功する
- [ ] `npm run lint` が成功する
- [ ] `npm run build` が成功する
- [ ] `/` から診断フォームを送信できる
- [ ] `/result` におすすめサービス、プラン、想定月額、理由、公式リンクが表示される
- [ ] 価格・制限情報の最終更新日が表示される
- [ ] 「料金や制限は変更される可能性があるため公式ページを確認してください」の注記が表示される
- [ ] `/about` に診断ロジックと公式リンクが表示される
- [ ] `/blog` から3本の下書き記事へ遷移できる
- [ ] 存在しないURLで404ページが表示される
- [ ] `/robots.txt` が表示される
- [ ] `/sitemap.xml` が表示される

## 本番URL公開後に確認する項目

- [ ] Vercelの本番URLでトップページが表示される
- [ ] 診断フォーム送信後、`/result` が表示される
- [ ] `/about`、`/blog`、記事3本が表示される
- [ ] 存在しないURLで404ページが表示される
- [ ] `https://本番URL/robots.txt` が表示され、sitemap URLが本番URLになっている
- [ ] `https://本番URL/sitemap.xml` にトップ、about、blog、記事URLが含まれる
- [ ] ブラウザのページタイトルとmeta descriptionが意図どおりになっている
- [ ] OGP確認ツールでタイトル、説明文、URLが本番URLになっている
- [ ] 公式リンクが別タブで開く
- [ ] 料金や制限の注記、最終更新日が表示される

## Vercelデプロイ手順

1. GitHubにこのリポジトリをpushします。
2. Vercelで `Add New Project` を選びます。
3. このリポジトリをImportします。
4. Framework Preset が `Next.js` になっていることを確認します。
5. Build Command は `npm run build`、Output Directory は未指定のままでDeployします。
6. 本番URLが決まったら、VercelのEnvironment Variablesに `NEXT_PUBLIC_SITE_URL` を追加します。
7. 再デプロイ後、本番URL公開後チェックリストを確認します。

DB、ログイン、外部APIキーは不要です。
