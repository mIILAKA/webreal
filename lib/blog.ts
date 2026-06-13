export type BlogCategory = "比較" | "料金" | "運用";

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  primaryKeyword: string;
  body: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "claude-code-vs-codex",
    title: "Claude Code vs Codex",
    seoTitle: "Claude Code vs Codex 比較2026 | どちらを契約すべきか",
    metaDescription: "Claude CodeとOpenAI Codexを料金、CLI/ChatGPT連携、個人開発、チーム利用の観点で比較。どちらを契約すべきかを整理します。",
    excerpt: "Claude CodeとCodexの違いを、料金よりも開発フローと使い方から整理します。",
    category: "比較",
    primaryKeyword: "Claude Code vs Codex",
    body: [
      "Claude CodeとCodexは、どちらもAIにコード作業を任せるための強力な選択肢です。ただし選び方を「どちらのモデルが賢いか」だけに寄せると失敗しやすくなります。実際の差は、料金体系、作業場所、長時間タスクへの向き不向き、既存ワークフローとの相性に出ます。MVPや個人開発では、毎月の固定費と使う頻度を先に決めるほうが現実的です。",
      "Claude Codeは、ターミナルでコードベースを読み、実装、調査、修正、テスト実行まで進めたい人に向きます。ProやMaxプランで使う場合、月額の予算を読みやすい一方で、利用上限や混雑時の制限は変わる可能性があります。毎日リファクタや複数ファイル修正を任せたいなら、Proだけで足りるか、Maxが必要かを早めに見極める必要があります。",
      "Codexは、OpenAIのエコシステムやChatGPTと組み合わせたい人に向きます。ChatGPTをすでに日常的に使っている人は、設計相談から実装作業まで流れをつなげやすいのが利点です。APIキー利用や追加利用の扱いはプランによって変わるため、公式のCodex pricingを確認する必要があります。",
      "比較するときは、同じタスクを1つ決めて試すのが有効です。たとえば「既存フォームにバリデーションを追加し、テストを直し、READMEも更新する」という作業を両方で試します。出力の賢さだけでなく、差分を理解しやすいか、失敗したときに戻しやすいか、レビューしやすいかを見ます。",
      "チームで使う場合は、レビュー担当が差分を追いやすいか、秘密情報を扱うルールを説明しやすいか、既存のCIやIssue管理とぶつからないかが重要です。Claude Codeはターミナル作業に寄せやすく、CodexはOpenAIアカウントやChatGPTの利用体験とつながりやすいという違いがあります。",
      "個人開発で最初に選ぶなら、CLIでリポジトリ作業を任せたい人はClaude Code、ChatGPT中心で相談と実装を行き来したい人はCodexが候補です。IDE中心ならCursorも比較対象に入ります。迷う場合は、診断ツールで月予算と開発スタイルを入力し、最初の契約候補を絞るのが早いです。"
    ],
    faq: [
      {
        question: "Claude CodeとCodexはどちらが安いですか？",
        answer: "使い方によります。月額プラン内で収まる軽い利用なら差は小さく、長時間のAgent作業や追加利用が増えると実質コストが変わります。"
      },
      {
        question: "個人開発ではどちらがおすすめですか？",
        answer: "CLIで実装を任せたいならClaude Code、ChatGPT中心で設計相談から進めたいならCodexが選びやすいです。"
      },
      {
        question: "両方契約する価値はありますか？",
        answer: "最初から両方契約するより、主作業の場所に合わせて1つ選び、足りない場面が明確になってから追加するほうが無駄が少ないです。"
      }
    ],
    relatedSlugs: ["claude-max-vs-pro", "ai-coding-pricing-2026", "cli-ai-coding-tools"]
  },
  {
    slug: "claude-max-vs-pro",
    title: "Claude Max vs Pro",
    seoTitle: "Claude Max vs Pro 比較2026 | Claude Code目的ならどちらか",
    metaDescription: "Claude ProとClaude Maxの違いを、Claude Code利用、開発時間、予算、個人開発での費用対効果から解説します。",
    excerpt: "Claude Codeを使う前提で、ProとMaxの選び方を月予算と開発時間から整理します。",
    category: "料金",
    primaryKeyword: "Claude Max vs Pro",
    body: [
      "Claude ProとClaude Maxの違いは、単純な機能差というより、どれだけ長く、どれだけ重い作業を任せるかの差です。Claude Codeを月に数回使う程度ならProから始めるのが自然です。一方で、毎日まとまった時間を使い、実装、調査、テスト、リファクタを連続して依頼するなら、Proの上限に早く当たる可能性があります。",
      "Proは、月20ドル前後の入口として考えやすいプランです。学習、個人アプリの小さな機能追加、レビュー補助、短いバグ修正などには向きます。MVPを最速で出す段階でも、1日1時間程度の利用ならProで十分なケースが多いです。",
      "Maxは、Claude Codeを日常の開発環境として使う人向けです。利用量の余裕を買うイメージで、料金は上がりますが、作業を途中で止めたくない人には価値があります。週20時間以上コードを書く人、既存コードの大規模改善を進める人、AIに調査からPR単位の作業まで任せたい人は検討対象になります。",
      "判断軸は、AIに任せる作業の粒度です。Proでは、1つのバグ修正、1つの画面追加、短い調査のようにタスクを小さく切ると使いやすくなります。Maxでは、複数ファイルの設計見直し、移行作業、テスト追加まで含む長めの作業を続けやすくなります。",
      "費用対効果は、月額だけでなく開発の中断回数で見ます。Proで何度も待つ、会話を分け直す、作業の文脈を失う、という状態が続くなら、見かけの安さよりも機会損失が大きくなります。反対に、週末だけの個人開発なら、多少の上限は大きな問題になりません。",
      "最初の契約で迷うなら、Proで1週間使い、上限に当たる頻度、1回の作業時間、AIに任せた作業量を記録してください。その実測値をもとにMaxへ上げるほうが安全です。"
    ],
    faq: [
      {
        question: "Claude ProでClaude Codeは使えますか？",
        answer: "公式サポート情報ではProまたはMaxプランでClaude Codeを使う案内があります。ただし提供条件は変わる可能性があるため、契約前に公式ページを確認してください。"
      },
      {
        question: "Maxは誰に向いていますか？",
        answer: "毎日Claude Codeを使い、長い実装やリファクタを止めずに進めたい人に向いています。"
      },
      {
        question: "ProからMaxへ上げるタイミングは？",
        answer: "上限で作業が止まる頻度が高くなり、それが開発速度のボトルネックになったときです。"
      }
    ],
    relatedSlugs: ["claude-code-vs-codex", "ai-coding-pricing-2026", "claude-md"]
  },
  {
    slug: "is-cursor-ultra-worth-it",
    title: "Cursor Ultraは価値があるか",
    seoTitle: "Cursor Ultraは価値があるか | Pro・Pro+との違いと判断基準",
    metaDescription: "Cursor Ultraの価値を、ProやPro+との違い、月200ドル級プランが必要な人、個人開発での費用対効果から解説します。",
    excerpt: "Cursor Ultraを契約すべき人と、Proで十分な人の違いを整理します。",
    category: "料金",
    primaryKeyword: "Cursor Ultra 価値",
    body: [
      "Cursor Ultraは、Cursorを開発の中心に置き、Agentや高性能モデルを長時間使う人向けの上位プランです。重要なのは、Ultraが成果を保証するプランではなく、より多い利用枠を買うプランだという点です。",
      "Proで十分な人は多いです。週に数時間の個人開発、MVPの小さな機能追加、コード補完とチャット中心の利用なら、まずProで始めるほうが無駄がありません。Cursorの強みは、IDE内で複数ファイル編集やAgent作業を進められることです。",
      "Ultraを検討すべきなのは、Cursorの利用上限が開発速度を止めている人です。毎日数時間Agentを回す、既存コードの大規模改修を続ける、収益化済みプロダクトの開発で時間単価が高い、といったケースです。",
      "費用対効果を測るには、1か月だけ作業ログを残すのがおすすめです。Cursorに任せたタスク、節約できた時間、手戻りした時間、上限に当たった回数を記録します。Ultraの価値は、気分ではなくこの数字で判断できます。",
      "Ultraを契約する前に、Proで不満な点を言語化してください。「1日2回上限で止まる」「大きなリファクタが途中で切れる」「モデル選択の自由度が足りない」のように具体化します。その不満が売上、納期、公開速度に直結しているならUltraの価値があります。",
      "逆に、AIの提案を読む時間が足りない、仕様が曖昧、レビューが追いつかないという問題なら、上位プランより開発プロセスの改善が先です。AGENTS.mdやテスト環境を整えてから上位プランを検討してください。"
    ],
    faq: [
      {
        question: "Cursor Ultraは個人開発者にも必要ですか？",
        answer: "多くの個人開発者は最初はProで十分です。Ultraは、Cursorの上限が収益や開発速度に直接影響している人向けです。"
      },
      {
        question: "ProとUltraの一番の違いは何ですか？",
        answer: "主に利用量の余裕です。機能そのものより、長時間Agentや高性能モデルを使いたいかが判断軸になります。"
      },
      {
        question: "いつUltraに上げるべきですか？",
        answer: "ProやPro+で上限に当たる頻度が高く、待ち時間や作業中断のコストが月額差を超えると感じたときです。"
      }
    ],
    relatedSlugs: ["cursor-vs-github-copilot", "ai-coding-pricing-2026", "start-ai-coding-plan"]
  },
  {
    slug: "agents-md",
    title: "AGENTS.mdとは",
    seoTitle: "AGENTS.mdとは | AIコーディングエージェント用READMEの作り方",
    metaDescription: "AGENTS.mdの役割、書くべき内容、CLAUDE.mdとの違い、AIコーディングで失敗を減らす運用方法を解説します。",
    excerpt: "AGENTS.mdは、AIコーディングエージェントにプロジェクトの前提を伝えるためのREADMEです。",
    category: "運用",
    primaryKeyword: "AGENTS.md",
    body: [
      "AGENTS.mdは、AIコーディングエージェントに向けたREADMEのようなファイルです。人間向けのREADMEがセットアップや使い方を書く場所だとすれば、AGENTS.mdはAIが安全に作業するための前提、コマンド、設計方針、注意点を書く場所です。",
      "書くべき内容は、セットアップコマンド、テストコマンド、コードスタイル、ディレクトリ構成、触ってはいけないファイル、PR前の確認手順です。たとえば「依存関係はnpm install」「検証はnpm run lintとnpm run build」「DBマイグレーションは勝手に実行しない」などです。",
      "AGENTS.mdの価値は、ツールをまたいで使いやすいことです。Claude Code、Codex、Cursorなどを併用する場合、特定ツール専用のファイルだけでは運用が割れます。AGENTS.mdを共通の入口にし、必要に応じてCLAUDE.mdへ分岐させると説明しやすくなります。",
      "最初のAGENTS.mdは完璧でなくて構いません。AIが失敗したたびに1行ずつ育てるのが自然です。「価格情報には最終更新日を入れる」「外部リンクは公式ページを優先する」のように、実際の失敗からルールを追加します。",
      "チームで使う場合は、AGENTS.mdをレビュー対象にするのがおすすめです。AIへの指示は、実質的には開発ルールです。PRテンプレートにAGENTS.mdの変更有無を入れる、古いルールは削除する、といった運用にすると形骸化しにくくなります。",
      "注意点は、長くしすぎないことです。AIに毎回読ませたい内容だけを書き、詳細な仕様は別ファイルへ逃がします。料金比較サイトなら、価格は公式情報を優先する、最終更新日を表示する、断定しすぎない、というルールが有効です。"
    ],
    faq: [
      {
        question: "AGENTS.mdはどこに置きますか？",
        answer: "通常はリポジトリのルートに置きます。モノレポではパッケージごとに追加する運用もあります。"
      },
      {
        question: "READMEとAGENTS.mdは何が違いますか？",
        answer: "READMEは人間向け、AGENTS.mdはAIエージェント向けです。AIに守ってほしい作業ルールを明確に書くのがポイントです。"
      },
      {
        question: "CLAUDE.mdと併用できますか？",
        answer: "できます。AGENTS.mdを共通ルール、CLAUDE.mdをClaude Code固有の補足として使うと整理しやすいです。"
      }
    ],
    relatedSlugs: ["claude-md", "claude-code-vs-codex", "cli-ai-coding-tools"]
  },
  {
    slug: "claude-md",
    title: "CLAUDE.mdとは",
    seoTitle: "CLAUDE.mdとは | Claude Codeで失敗を減らす設定ファイル",
    metaDescription: "CLAUDE.mdの役割、書くべき内容、AGENTS.mdとの違い、Claude Codeで効果を出す運用方法を解説します。",
    excerpt: "CLAUDE.mdは、Claude Codeにプロジェクト固有のルールや前提を渡すためのファイルです。",
    category: "運用",
    primaryKeyword: "CLAUDE.md",
    body: [
      "CLAUDE.mdは、Claude Codeにプロジェクト固有の前提を伝えるためのファイルです。毎回同じ説明をする代わりに、リポジトリのルールをファイルとして残せます。Claude Codeを継続利用するなら、最初に整える価値があります。",
      "書く内容は、プロジェクト概要、開発コマンド、テストコマンド、コードスタイル、禁止事項、よくある失敗、レビュー観点です。たとえば「変更後はnpm run lintとnpm run buildを実行」「UIは既存CSSに合わせる」などです。",
      "CLAUDE.mdは万能ではありません。長すぎるファイルは読まれにくく、毎回のコンテキスト消費も増えます。細かい仕様はdocs以下に分け、CLAUDE.mdには参照先と判断基準だけを置くほうが運用しやすいです。",
      "運用で重要なのは、CLAUDE.mdを固定したままにしないことです。AIが同じ種類のミスをしたら、叱るのではなくルールを更新します。テストを忘れる、既存デザインから外れる、不要なリファクタをする、といった失敗は短く追加できます。",
      "CLAUDE.mdに秘密情報や長い仕様を詰め込むのは避けるべきです。APIキー、顧客情報、非公開の契約条件などは書かず、必要なら安全な参照方法だけを示します。毎回読まれても困らない内容にするのが基本です。",
      "AGENTS.mdとの違いは、CLAUDE.mdがClaude Code寄りである点です。複数ツール対応ならAGENTS.md、Claude Code中心ならCLAUDE.mdから始めるとよいです。併用する場合は、共通ルールとツール固有ルールを分けてください。"
    ],
    faq: [
      {
        question: "CLAUDE.mdは必須ですか？",
        answer: "必須ではありませんが、Claude Codeを継続的に使うなら作ったほうが失敗を減らせます。"
      },
      {
        question: "何文字くらいがよいですか？",
        answer: "最初は短くて十分です。セットアップ、検証コマンド、禁止事項、設計方針を数十行でまとめるのがおすすめです。"
      },
      {
        question: "AGENTS.mdとどちらを作るべきですか？",
        answer: "複数ツール対応ならAGENTS.md、Claude Code中心ならCLAUDE.mdから始めるとよいです。併用もできます。"
      }
    ],
    relatedSlugs: ["agents-md", "claude-max-vs-pro", "claude-code-vs-codex"]
  },
  {
    slug: "ai-coding-pricing-2026",
    title: "AIコーディング料金比較2026",
    seoTitle: "AIコーディング料金比較2026 | Claude Code・Codex・Cursorの選び方",
    metaDescription: "AIコーディングツールの料金を2026年版で比較。Claude Code、Codex、Cursor、GitHub Copilotの選び方を予算別に解説します。",
    excerpt: "Claude Code、Codex、Cursor、GitHub Copilotを予算と開発スタイル別に比較します。",
    category: "料金",
    primaryKeyword: "AIコーディング 料金 比較 2026",
    body: [
      "2026年のAIコーディング料金は、月額だけで比較しにくくなっています。Claude Code、Codex、Cursor、GitHub Copilotはいずれも、プラン内の利用枠、追加利用、モデルごとの消費、チーム機能の有無が絡みます。",
      "個人開発の入口は、無料から月20ドル前後です。軽い補完、チャット、学習、週数時間のMVP開発なら、まずFreeやPro相当のプランで十分です。Cursor Pro、Claude Pro、ChatGPT/Codex系のプラン、GitHub Copilotの各プランが候補になります。",
      "月100ドル以上のプランは、AIを毎日の開発環境として使う人向けです。Claude Max、Cursor Ultra、Codexの追加利用や上位枠は、長時間Agentを回す、複数ファイルの改修を任せる、既存コードの調査を継続する、といった用途で価値が出ます。",
      "料金比較では、見かけの月額と実際の開発コストを分けて考えます。安いプランでも上限で何度も止まり、作業の流れが切れるなら高くつくことがあります。高いプランでも、毎月数時間から十数時間を確実に節約できるなら投資として成立します。",
      "2026年時点では、各社が利用枠や追加課金の見せ方を頻繁に変えています。公式ページの価格だけでなく、サポート記事、利用上限、クレジットの扱い、API利用時の別課金を確認してください。",
      "選び方はシンプルです。IDE派ならCursorまたはGitHub Copilot、CLI派ならClaude CodeまたはCodex、ChatGPT中心で相談したいならCodex系、チーム管理を重視するならBusinessやTeams系を見ます。診断ツールで月予算と開発日数を入力すると、最初の候補を絞れます。"
    ],
    faq: [
      {
        question: "AIコーディングツールは月いくらから始められますか？",
        answer: "無料プランから始められるものもあります。本格利用の入口は月20ドル前後が目安です。"
      },
      {
        question: "月100ドル以上のプランは必要ですか？",
        answer: "毎日長時間Agentを使う人には価値があります。週数時間の個人開発なら、まず低額プランで十分です。"
      },
      {
        question: "料金比較で一番重要な点は何ですか？",
        answer: "月額だけでなく、利用上限、追加料金、作業が止まる頻度、公式ページの最新条件を見ることです。"
      }
    ],
    relatedSlugs: ["claude-code-vs-codex", "is-cursor-ultra-worth-it", "start-ai-coding-plan"]
  },
  {
    slug: "start-ai-coding-plan",
    title: "AIコーディング課金は月20ドルから始めるべきか",
    seoTitle: "AIコーディング課金は月20ドルから始めるべきか",
    metaDescription: "個人開発者がAIコーディング課金を始めるときの判断軸を、予算と利用頻度から整理します。",
    excerpt: "個人開発者が最初に見るべき判断軸を、予算と利用頻度から整理します。",
    category: "料金",
    primaryKeyword: "AIコーディング 課金",
    body: [
      "AIコーディングサービスは、まず月20ドル前後のプランから試すのが現実的です。毎日長時間使う前提がないなら、最初から高額プランに入るより、1週間の開発時間と用途を見ながら上げるほうが失敗しにくくなります。",
      "IDE中心ならCursorやGitHub Copilot、CLI中心ならClaude Codeのように、普段の作業場所に近いサービスを選ぶと継続しやすいです。料金だけで選ぶより、実際にコードを書く流れを邪魔しないことを優先しましょう。",
      "最初の判断はシンプルで十分です。週に数時間なら無料または低額、週に7時間以上なら月20ドル前後、毎日まとまった実装やリファクタを任せるなら上位プランを検討します。"
    ],
    faq: [
      {
        question: "最初から高額プランに入るべきですか？",
        answer: "多くの場合は不要です。まず低額プランで実際の利用量を測るのがおすすめです。"
      }
    ],
    relatedSlugs: ["ai-coding-pricing-2026", "claude-code-vs-codex", "is-cursor-ultra-worth-it"]
  },
  {
    slug: "cursor-vs-github-copilot",
    title: "Cursor と GitHub Copilot の違いを比較",
    seoTitle: "Cursor と GitHub Copilot の違いを比較",
    metaDescription: "CursorとGitHub Copilotの違いを、IDE体験、ワークフロー、チーム導入の観点で比較します。",
    excerpt: "IDE内の体験、既存ワークフロー、チーム導入の観点で比較します。",
    category: "比較",
    primaryKeyword: "Cursor GitHub Copilot 比較",
    body: [
      "CursorはAI前提のエディタ体験を重視したい人に向いています。複数ファイルをまたいだ編集やAgent的な作業をIDE内で進めたい場合、最初の候補にしやすいサービスです。",
      "GitHub Copilotは既存のVS Code、JetBrains、GitHub上の作業に自然に足したい人に向いています。すでにGitHub中心で開発しているチームでは、導入や説明がしやすいのが強みです。",
      "迷った場合は、個人のMVP開発ならCursor、既存IDEやGitHub運用を変えたくない場合はGitHub Copilot、という分け方から始めると判断しやすくなります。"
    ],
    faq: [
      {
        question: "CursorとGitHub Copilotはどちらが初心者向きですか？",
        answer: "既存IDEを変えたくないならGitHub Copilot、AI前提のエディタを試したいならCursorが向いています。"
      }
    ],
    relatedSlugs: ["is-cursor-ultra-worth-it", "ai-coding-pricing-2026", "start-ai-coding-plan"]
  },
  {
    slug: "cli-ai-coding-tools",
    title: "CLI派に向くAIコーディング環境の選び方",
    seoTitle: "CLI派に向くAIコーディング環境の選び方",
    metaDescription: "ターミナルで実装依頼、調査、リファクタを進めたい人向けにAIコーディング環境の選び方を解説します。",
    excerpt: "ターミナルでの実装依頼、調査、リファクタ用途に向いた選び方をまとめます。",
    category: "運用",
    primaryKeyword: "CLI AIコーディング",
    body: [
      "CLI派は、チャット画面の使いやすさよりも、ローカルのリポジトリで調査、編集、テストまで回しやすいかを見たほうがよいです。ターミナルから作業を渡せると、実装中の文脈を保ちやすくなります。",
      "Claude CodeのようなCLI寄りのツールは、短い実装スプリントやリファクタの相談に向いています。週の開発時間が長い場合は、利用上限や上位プランの確認が重要になります。",
      "CLIツールを選ぶときは、価格だけでなく、対象リポジトリの大きさ、テスト実行の頻度、PR作成まで任せたいかを確認しましょう。"
    ],
    faq: [
      {
        question: "CLI派はどのツールを見るべきですか？",
        answer: "Claude CodeやCodexのように、ターミナルやリポジトリ作業と相性のよいツールを優先するとよいです。"
      }
    ],
    relatedSlugs: ["claude-code-vs-codex", "agents-md", "claude-md"]
  }
];

export const blogCategories: BlogCategory[] = ["比較", "料金", "運用"];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
