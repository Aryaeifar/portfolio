export type BlogLocale = "en" | "fa";

export interface BlogPost {
  slug: string;
  date: string;
  tags: string[];
  thumbnail?: string;
  readTime: string;
  title: Record<BlogLocale, string>;
  description: Record<BlogLocale, string>;
  body: Record<BlogLocale, string>;
}

export const blogPosts: BlogPost[] = [];
