import { blogPosts, type BlogLocale, type BlogPost } from "~/data/blog";

const localeKey = (locale: string): BlogLocale =>
  locale?.startsWith("fa") ? "fa" : "en";

export const formatBlogDate = (date: string, locale: string) => {
  const loc = localeKey(locale) === "fa" ? "fa-IR" : "en-US";
  return new Date(date).toLocaleDateString(loc, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const useBlog = () => {
  const { locale } = useI18n();
  const route = useRoute();
  const lang = computed(() => localeKey(locale.value));

  const sortedPosts = computed(() =>
    [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );

  const allTags = computed(() => {
    const tags = Array.from(
      new Set(sortedPosts.value.flatMap((post) => post.tags))
    ).sort();
    return ["All", ...tags];
  });

  const tagCounts = computed(() => {
    const counts: Record<string, number> = {
      All: sortedPosts.value.length,
    };
    for (const tag of allTags.value) {
      if (tag === "All") continue;
      counts[tag] = sortedPosts.value.filter((post) =>
        post.tags.includes(tag)
      ).length;
    }
    return counts;
  });

  const selectedTag = computed(() => {
    const tag = route.query.tag;
    return typeof tag === "string" && tag.length ? tag : "All";
  });

  const filteredPosts = computed(() => {
    if (selectedTag.value === "All") return sortedPosts.value;
    return sortedPosts.value.filter((post) =>
      post.tags.includes(selectedTag.value)
    );
  });

  const localize = (post: BlogPost) => ({
    ...post,
    title: post.title[lang.value],
    description: post.description[lang.value],
    body: post.body[lang.value],
  });

  const getPost = (slug: string) => {
    const post = blogPosts.find((item) => item.slug === slug);
    return post ? localize(post) : null;
  };

  const relatedPosts = (slug: string, tags: string[] = []) => {
    return sortedPosts.value
      .filter((post) => post.slug !== slug)
      .map((post) => ({
        post,
        score: tags.filter((tag) => post.tags.includes(tag)).length,
      }))
      .sort((a, b) => {
        if (a.score !== b.score) return b.score - a.score;
        return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
      })
      .slice(0, 3)
      .map(({ post }) => localize(post));
  };

  return {
    lang,
    sortedPosts,
    allTags,
    tagCounts,
    selectedTag,
    filteredPosts,
    localize,
    getPost,
    relatedPosts,
    formatDate: (date: string) => formatBlogDate(date, locale.value),
  };
};
