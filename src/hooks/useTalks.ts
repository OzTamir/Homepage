import { useState, useEffect } from "react";
import talksApi from "../api/talksApi";

export interface TalkResource {
  kind: string;
  label: string;
  href: string;
  external: boolean;
}

export interface Talk {
  slug: string;
  title: string;
  tagline: string;
  year: number;
  venue?: string;
  url: string;
  resources: TalkResource[];
}

const useTalks = () => {
  const [talks, setTalks] = useState<Talk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTalks = async () => {
      try {
        const response = await talksApi.get("/talks");
        setTalks(response.data.talks ?? []);
      } catch (err) {
        setError("Failed to fetch talks");
      } finally {
        setLoading(false);
      }
    };

    fetchTalks();
  }, []);

  return { talks, loading, error };
};

export default useTalks;
