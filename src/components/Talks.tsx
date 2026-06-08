import useTalks from "../hooks/useTalks";
import SectionList, { SectionItem } from "./SectionList";

const Talks = () => {
  const { talks, loading, error } = useTalks();

  if (loading) {
    return <div className="text-sm text-paper/40">Loading talks…</div>;
  }

  if (error || talks.length === 0) {
    return null;
  }

  const items: SectionItem[] = talks.map((talk) => ({
    title: talk.title,
    href: talk.url,
    excerpt: talk.tagline,
    meta: talk.venue ? `${talk.venue} · ${talk.year}` : String(talk.year),
    external: true,
  }));

  return (
    <SectionList
      title="~/talks"
      titleHref="https://talks.oztamir.com/"
      items={items}
    />
  );
};

export default Talks;
