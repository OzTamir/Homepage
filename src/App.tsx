import "./App.css";
import useDarkMode from "./hooks/useDarkMode";
import { Socials } from "./components/Socials";
import BlogPosts from "./components/BlogPosts";

const OzImage = () => {
  const isDarkMode = useDarkMode();
  if (isDarkMode === undefined) {
    return null;
  }

  return (
    <div className="lg:h-[100svh] h-[50svh] pt-6 lg:pt-0">
      <img
        src={isDarkMode ? "/me_dark.png" : "/me.png"}
        className="h-full lg:pl-10 pl-[4.5rem]"
        alt="Here I'd put an image of me - if the server would allow me!"
      />
    </div>
  );
};

const GithubLink = () => {
  return (
    <div className="pt-4 pb-10 lg:pb-0 lg:pt-16 absolute">
      <a
        href="https://github.com/OzTamir/Homepage"
        className="text-slate-700/30 text-[0.75rem] hover:text-slate-700 dark:hover:text-slate-300 font-semibold dark:text-slate-500/50"
      >
        <pre>This site is open-source! 🚀</pre>
      </a>
    </div>
  );
};

const Hero = () => (
  <div className="flex flex-col justify-center lg:w-1/2 sm:max-md:w-full h-full my-auto px-10 lg:px-0 lg:mr-32">
    <div className="text-center lg:text-left">
      <div className="flex flex-col justify-center lg:justify-start border-b-2 border-b-golden/20 lg:mb-10 mb-4">
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <p className="font-medium text-golden text-xl">Oz Tamir</p>
        </div>

        <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl lg:mb-10 mb-4 dark:text-stone-100">
          ¯\_(ツ)_/¯ as a Service
        </h1>

        <p className="font-normal text-gray-500 dark:text-stone-200 text-sm md:text-md xl:text-lg lg:mb-10 mb-4">
          Hi, I’m <span className="text-golden font-bold mr-1">Oz</span> 👋
          <br />
          I'm currently working on R&D and Marketing over at{" "}
          <a href="https://blockaid.io" className="text-golden">
            Blockaid
          </a>
          ,
          <br />
          but I never skip a chance to work on side projects - see my{" "}
          <a href="posts.oztamir.com" className="text-golden">
            blog
          </a>{" "}
          for more.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between ">
        <BlogPosts />
      </div>

      <Socials />
    </div>
    <div className="flex justify-center pt-4">
      <GithubLink />
    </div>
  </div>
);

function App() {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full h-full">
      <OzImage />
      <Hero />
    </div>
  );
}

export default App;
