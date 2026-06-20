import { useState, useEffect } from "react";
import { BLOG_URL } from "../config";

interface Post {
  title: string;
  slug: string;
  url: string;
  excerpt: string | null;
  pubDate: string;
  featureImage: string | null;
}

const FEED_URL = `${BLOG_URL}/posts.json`;

const useLatestPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(FEED_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setPosts((data.posts ?? []).slice(0, 3));
      } catch {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { posts, loading, error };
};

export default useLatestPosts;
