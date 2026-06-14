"use client";

import { useEffect } from "react";
import { sendAnalyticsEvent } from "@/lib/analytics";

type ArticleViewEventProps = {
  slug: string;
  title: string;
  category: string;
};

export function ArticleViewEvent({ slug, title, category }: ArticleViewEventProps) {
  useEffect(() => {
    sendAnalyticsEvent("article_view", {
      article_slug: slug,
      article_title: title,
      article_category: category
    });
  }, [category, slug, title]);

  return null;
}
