import { useState, useEffect } from "react";
import api from "../api/ghostApi";
interface Post {
  id: string;
  title: string;
  slug: string;
  published_at: string;
  excerpt: string;
  feature_image: string;
  url: string;
}

const useLatestPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts", {
          params: {
            limit: 3,
            fields: "id,title,slug,published_at,excerpt,feature_image,url",
          },
        });
        setPosts(response.data.posts);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useLatestPosts;
