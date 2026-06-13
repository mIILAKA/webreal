export type Preference = "ide" | "cli";
export type WorkStyle = "solo" | "team";
export type UseCase = "side-project" | "startup" | "learning" | "refactor" | "review";

export type Answers = {
  budget: number;
  hoursPerDay: number;
  daysPerWeek: number;
  useCase: UseCase;
  preference: Preference;
  workStyle: WorkStyle;
};

export type Service = {
  id: string;
  service: string;
  plan: string;
  monthlyUsd: number;
  audience: string;
  officialUrl: string;
  sourceLabel: string;
  lastUpdated: string;
  availabilityNote?: string;
};

export type Recommendation = {
  best: Service;
  alternatives: Service[];
  reasons: string[];
  estimatedMonthlyUsd: number;
  intensity: "light" | "regular" | "heavy";
};

export const priceDataLastUpdated = "2026-06-13";

export const officialLinks = [
  {
    label: "GitHub Copilot Plans",
    href: "https://docs.github.com/en/copilot/get-started/plans"
  },
  {
    label: "GitHub Copilot Pricing",
    href: "https://github.com/features/copilot/plans"
  },
  {
    label: "Cursor Pricing",
    href: "https://cursor.com/pricing"
  },
  {
    label: "Claude Code",
    href: "https://www.anthropic.com/claude-code"
  }
];

export const services: Service[] = [
  {
    id: "github-copilot-free",
    service: "GitHub Copilot",
    plan: "Free",
    monthlyUsd: 0,
    audience: "無料で補完と軽いチャットを試したい人",
    officialUrl: "https://docs.github.com/en/copilot/get-started/plans",
    sourceLabel: "GitHub Copilot plans",
    lastUpdated: priceDataLastUpdated
  },
  {
    id: "github-copilot-pro",
    service: "GitHub Copilot",
    plan: "Pro",
    monthlyUsd: 10,
    audience: "既存の有料プラン利用者、または申込再開後に安く始めたい個人開発者",
    officialUrl: "https://github.com/features/copilot/plans",
    sourceLabel: "GitHub Copilot pricing",
    lastUpdated: priceDataLastUpdated,
    availabilityNote: "2026年6月時点で新規サインアップ一時停止の公式注記があります。"
  },
  {
    id: "cursor-pro",
    service: "Cursor",
    plan: "Pro",
    monthlyUsd: 20,
    audience: "IDEでコードベース編集とAgentを使いたい個人開発者",
    officialUrl: "https://cursor.com/pricing",
    sourceLabel: "Cursor pricing",
    lastUpdated: priceDataLastUpdated
  },
  {
    id: "claude-code-pro",
    service: "Claude Code",
    plan: "Claude Pro",
    monthlyUsd: 20,
    audience: "CLIで短い実装スプリントを任せたい人",
    officialUrl: "https://www.anthropic.com/claude-code",
    sourceLabel: "Claude Code pricing",
    lastUpdated: priceDataLastUpdated
  },
  {
    id: "cursor-teams",
    service: "Cursor",
    plan: "Teams",
    monthlyUsd: 40,
    audience: "チーム課金、管理、共有ルールが必要な小規模チーム",
    officialUrl: "https://cursor.com/pricing",
    sourceLabel: "Cursor pricing",
    lastUpdated: priceDataLastUpdated
  },
  {
    id: "github-copilot-business",
    service: "GitHub Copilot",
    plan: "Business",
    monthlyUsd: 19,
    audience: "既存IDEを変えずにチーム導入したい組織",
    officialUrl: "https://docs.github.com/en/copilot/get-started/plans",
    sourceLabel: "GitHub Copilot plans",
    lastUpdated: priceDataLastUpdated,
    availabilityNote: "2026年6月時点で一部組織の新規セルフサーブ申込に一時停止の公式注記があります。"
  },
  {
    id: "claude-code-max",
    service: "Claude Code",
    plan: "Claude Max 5x",
    monthlyUsd: 100,
    audience: "CLIで長めの実装、調査、リファクタを毎日回す人",
    officialUrl: "https://www.anthropic.com/claude-code",
    sourceLabel: "Claude Code pricing",
    lastUpdated: priceDataLastUpdated
  }
];

const byId = (id: string) => {
  const service = services.find((item) => item.id === id);
  if (!service) {
    throw new Error(`Unknown service: ${id}`);
  }
  return service;
};

export function getRecommendation(answers: Answers): Recommendation {
  const weeklyHours = answers.hoursPerDay * answers.daysPerWeek;
  const intensity =
    weeklyHours >= 20 || answers.useCase === "refactor"
      ? "heavy"
      : weeklyHours >= 7
        ? "regular"
        : "light";

  let best = byId("github-copilot-free");

  if (answers.budget < 10) {
    best = byId("github-copilot-free");
  } else if (answers.workStyle === "team") {
    if (answers.preference === "ide" && answers.budget >= 40) {
      best = byId("cursor-teams");
    } else {
      best = byId("github-copilot-business");
    }
  } else if (answers.preference === "cli") {
    if (intensity === "heavy" && answers.budget >= 100) {
      best = byId("claude-code-max");
    } else if (answers.budget >= 20) {
      best = byId("claude-code-pro");
    } else {
      best = byId("github-copilot-free");
    }
  } else if (answers.preference === "ide") {
    if (answers.budget >= 20) {
      best = byId("cursor-pro");
    } else {
      best = byId("github-copilot-free");
    }
  }

  const reasons = buildReasons(answers, best, intensity);
  const alternatives = services
    .filter((service) => service.id !== best.id && service.monthlyUsd <= Math.max(answers.budget, 20))
    .sort((a, b) => {
      const aFit = fitScore(a, answers);
      const bFit = fitScore(b, answers);
      return bFit - aFit || a.monthlyUsd - b.monthlyUsd;
    })
    .slice(0, 3);

  return {
    best,
    alternatives,
    reasons,
    estimatedMonthlyUsd: best.monthlyUsd,
    intensity
  };
}

function fitScore(service: Service, answers: Answers) {
  let score = 0;
  if (service.monthlyUsd <= answers.budget) score += 4;
  if (answers.preference === "ide" && ["cursor-pro", "cursor-teams", "github-copilot-pro", "github-copilot-business"].includes(service.id)) score += 3;
  if (answers.preference === "cli" && service.id.startsWith("claude-code")) score += 3;
  if (answers.workStyle === "team" && ["cursor-teams", "github-copilot-business"].includes(service.id)) score += 3;
  if (answers.workStyle === "solo" && !["cursor-teams", "github-copilot-business"].includes(service.id)) score += 1;
  return score;
}

function buildReasons(answers: Answers, best: Service, intensity: Recommendation["intensity"]) {
  const reasons = [
    `月予算 $${answers.budget} に対して、${best.plan} は月額目安 $${best.monthlyUsd} で収まります。`,
    answers.preference === "ide"
      ? "IDE派なので、エディタ内補完、チャット、複数ファイル編集の使いやすさを優先しました。"
      : "CLI派なので、ターミナルから実装タスクを依頼しやすいサービスを優先しました。",
    answers.workStyle === "team"
      ? "チーム利用では、個人向け機能よりも請求管理や管理者向け機能を重視しました。"
      : "個人開発では、固定費を抑えてすぐ使えることを重視しました。"
  ];

  if (intensity === "heavy") {
    reasons.push("開発時間が長めなので、軽い補完だけでなくAgent的な作業量にも耐えやすいプランを高く評価しました。");
  } else if (intensity === "light") {
    reasons.push("利用頻度が軽めなので、まずは低コストで始めて不足したら上げる判断にしています。");
  }

  return reasons;
}

export function parseAnswers(params: Record<string, string | string[] | undefined>): Answers {
  const read = (key: string, fallback: string) => {
    const value = params[key];
    return Array.isArray(value) ? value[0] ?? fallback : value ?? fallback;
  };

  return {
    budget: Number(read("budget", "20")) || 20,
    hoursPerDay: Number(read("hoursPerDay", "1")) || 1,
    daysPerWeek: Number(read("daysPerWeek", "3")) || 3,
    useCase: read("useCase", "side-project") as UseCase,
    preference: read("preference", "ide") as Preference,
    workStyle: read("workStyle", "solo") as WorkStyle
  };
}

export const useCaseLabels: Record<UseCase, string> = {
  "side-project": "個人アプリ開発",
  startup: "MVP / スタートアップ開発",
  learning: "学習・試作",
  refactor: "リファクタ・既存コード改善",
  review: "コードレビュー・品質改善"
};
