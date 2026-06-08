export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Generic, data-driven row of text links (e.g. "Blog · Talks").
 * Add a new destination by appending to the `links` array — no markup changes.
 */
const LinkBar = ({ links }: { links: NavLink[] }) => (
  <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-paper/70">
    {links.map((link, i) => (
      <span key={link.href} className="flex items-center gap-x-4">
        {i > 0 && <span className="text-paper/20">·</span>}
        <a
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noreferrer" : undefined}
          className="relative transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-golden after:transition-all after:duration-300 hover:text-golden hover:after:w-full"
        >
          {link.label}
        </a>
      </span>
    ))}
  </nav>
);

export default LinkBar;
