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
    <code className="text-sm tracking-[0.15em] text-paper/50">{title}</code>
  );

  return (
    <section className="w-full">
      <div className="mb-1 flex items-center gap-4">
        <h2>
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
        <span aria-hidden className="h-px flex-1 bg-white/10" />
      </div>
      <ul className="divide-y divide-white/10">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="group relative -mx-3 flex items-start justify-between gap-4 rounded-md px-3 py-4 transition-colors duration-200 hover:bg-white/[0.025]"
            >
              {/* golden accent bar grows in on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-1/2 h-0 w-px -translate-y-1/2 bg-golden transition-all duration-300 group-hover:h-3/5"
              />
              <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-1">
                <div className="font-medium text-paper transition-colors group-hover:text-golden">
                  {item.title}
                </div>
                {item.excerpt && (
                  <p className="mt-1 text-sm leading-relaxed text-paper/50">
                    {item.excerpt}
                  </p>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-3 pt-0.5">
                {item.meta && (
                  <span className="hidden text-xs text-paper/40 transition-colors group-hover:text-paper/60 sm:inline">
                    {item.meta}
                  </span>
                )}
                <ArrowUpRight className="h-4 w-4 text-paper/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-golden" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionList;
