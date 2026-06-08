import Avatar from "./components/Avatar";
import LinkBar, { NavLink } from "./components/LinkBar";
import BlogPosts from "./components/BlogPosts";
import { Socials } from "./components/Socials";

// Generic, data-driven nav. Add a "Projects" line here when ready.
const navLinks: NavLink[] = [
  { label: "Blog", href: "https://posts.oztamir.com/", external: true },
  { label: "Talks", href: "https://talks.oztamir.com/", external: true },
];

const Hero = () => (
  <header className="flex flex-col items-center text-center">
    <Avatar />
    <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-golden">
      Oz Tamir
    </p>
    <h1 className="mt-3 text-4xl font-bold leading-tight text-paper sm:text-5xl md:text-6xl">
      ¯\_(ツ)_/¯ as a Service
    </h1>
    <p className="mt-6 max-w-xl text-sm leading-relaxed text-paper/70 sm:text-base">
      Hi, I'm <span className="font-bold text-golden">Oz</span> 👋
      <br />
      I'm currently working on something new at{" "}
      <span className="mx-1 rounded bg-golden px-1 py-0.5 font-mono tracking-widest text-ink">
        [REDACTED]
      </span>
      ,
      <br />
      but I never skip a chance to work on side projects — see my{" "}
      <a
        href="https://posts.oztamir.com/"
        target="_blank"
        rel="noreferrer"
        className="text-golden underline-offset-4 hover:underline"
      >
        blog
      </a>{" "}
      for more.
    </p>
    <div className="mt-6">
      <LinkBar links={navLinks} />
    </div>
  </header>
);

const Footer = () => (
  <footer className="flex flex-col items-center gap-6">
    <Socials />
    <a
      href="https://github.com/OzTamir/Homepage"
      target="_blank"
      rel="noreferrer"
      className="font-mono text-xs text-paper/25 transition-colors hover:text-paper/60"
    >
      This site is open-source! 🚀
    </a>
  </footer>
);

function App() {
  return (
    <div className="mx-auto flex min-h-[100svh] w-full max-w-2xl flex-col gap-14 px-8 py-16 sm:px-12 sm:py-24">
      <Hero />
      <main className="flex flex-1 flex-col">
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
