import useLatestPosts from "../hooks/useLatestPosts";
import SectionList, { SectionItem } from "./SectionList";

const formatDate = (iso: string) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const BlogPosts = () => {
  const { posts, loading, error } = useLatestPosts();

  if (loading) {
    return <div className="text-sm text-paper/40">Loading posts…</div>;
  }

  if (error || !posts || posts.length === 0) {
    return null;
  }

  const items: SectionItem[] = posts.map((post) => ({
    title: post.title,
    href: post.url,
    excerpt: post.excerpt,
    meta: formatDate(post.published_at),
    external: true,
  }));

  return (
    <SectionList
      title="~/posts"
      titleHref="https://posts.oztamir.com/"
      items={items}
    />
  );
};

export default BlogPosts;
