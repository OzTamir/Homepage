import { ArrowUpRight } from "lucide-react";

export interface SectionItem {
  title: string;
  href: string;
  excerpt?: string;
  meta?: string;
  external?: boolean;
}

interface SectionListProps {
  title: string;
  titleHref?: string;
  items: SectionItem[];
}

/**
 * Generic titled list of rows styled like the talks site.
 * Reused for blog posts now; ready as-is for a future "Talks" section.
 */
const SectionList = ({ title, titleHref, items }: SectionListProps) => {
  if (items.length === 0) return null;

  const heading = (
    <code className="text-sm uppercase tracking-[0.2em] text-paper/50">
      {title}
    </code>
  );

  return (
    <section className="w-full">
      <h2 className="mb-2">
        {titleHref ? (
          <a
            href={titleHref}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-golden"
          >
            {heading}
          </a>
        ) : (
          heading
        )}
      </h2>
      <ul className="divide-y divide-white/10 border-t border-white/10">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="group flex items-start justify-between gap-4 py-4"
            >
              <div className="min-w-0">
                <div className="font-medium text-paper transition-colors group-hover:text-golden">
                  {item.title}
                </div>
                {item.excerpt && (
                  <p className="mt-1 text-sm text-paper/50">{item.excerpt}</p>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-3 pt-0.5">
                {item.meta && (
                  <span className="hidden text-xs text-paper/40 sm:inline">
                    {item.meta}
                  </span>
                )}
                <ArrowUpRight className="h-4 w-4 text-paper/30 transition-colors group-hover:text-golden" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionList;
