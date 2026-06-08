import Avatar from "./components/Avatar";
import BlogPosts from "./components/BlogPosts";
import Talks from "./components/Talks";
import { Socials } from "./components/Socials";

// Shared helper for the staggered page-load entrance.
const revealAt = (ms: number) => ({
  className: "reveal",
  style: { animationDelay: `${ms}ms` },
});

const Hero = () => (
  <header className="flex flex-col items-center text-center">
    <div {...revealAt(0)}>
      <Avatar />
    </div>
    <p
      {...revealAt(80)}
      className="reveal mt-6 text-sm font-medium uppercase tracking-[0.25em] text-golden"
    >
      Oz Tamir<span className="cursor ml-0.5 font-normal text-golden">_</span>
    </p>
    <h1
      {...revealAt(160)}
      className="reveal mt-3 text-2xl font-bold leading-tight tracking-tight text-paper sm:text-3xl md:text-4xl"
    >
      ¯\_(ツ)_/¯ as a Service
    </h1>
    <p
      {...revealAt(240)}
      className="reveal mt-6 max-w-xl text-sm leading-relaxed text-paper/70 sm:text-base"
    >
      I'm <span className="font-bold text-golden">Oz</span>, a two-times founding
      engineer at cybersecurity startups, currently leading AI enablement
      and adoption at{" "}
      <span className="mx-1 rounded bg-golden px-1 py-0.5 font-mono tracking-widest text-ink">
        [REDACTED]
      </span>
      .
      <br />
      <br />
      I like to write about{" "}
      <a
        href="https://posts.oztamir.com/the-curious-case-of-arp-netmask/"
        target="_blank"
        rel="noreferrer"
        className="text-golden underline-offset-4 hover:underline"
      >
        low level security stuff
      </a>
      ,{" "}
      <a
        href="https://posts.oztamir.com/passing-context-to-auth0-actions-by-abusing-the-authorize-endpoint/"
        target="_blank"
        rel="noreferrer"
        className="text-golden underline-offset-4 hover:underline"
      >
        crazy engineering hacks
      </a>
      ,{" "}
      <a
        href="https://posts.oztamir.com/hacking-a-cheap-ring-light-to-be-smart/"
        target="_blank"
        rel="noreferrer"
        className="text-golden underline-offset-4 hover:underline"
      >
        DIY Home Automation Projects
      </a>
      ,{" "}
      <a
        href="https://posts.oztamir.com/i-now-use-ai-agents-to-text-you-back/"
        target="_blank"
        rel="noreferrer"
        className="text-golden underline-offset-4 hover:underline"
      >
        AI shenanigans
      </a>
      , and{" "}
      <a
        href="https://posts.oztamir.com/"
        target="_blank"
        rel="noreferrer"
        className="text-golden underline-offset-4 hover:underline"
      >
        a lot of other stuff
      </a>
      .
    </p>
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
    <>
      <div aria-hidden className="atmosphere" />
      <div className="mx-auto flex min-h-[100svh] w-full max-w-2xl flex-col gap-14 px-8 py-16 sm:px-12 sm:py-24">
        <Hero />
        <main className="flex flex-1 flex-col gap-14">
          <div {...revealAt(360)} className="reveal">
            <BlogPosts />
          </div>
          <div {...revealAt(440)} className="reveal">
            <Talks />
          </div>
        </main>
        <div {...revealAt(520)} className="reveal">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
