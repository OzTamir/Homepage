import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Socials } from "./components/Socials";
import BlogPosts from "./components/BlogPosts";

const OzImage = () => (
  <div className="lg:h-[100svh] h-[50svh] pt-6 lg:pt-0">
    <img
      src="/me.png"
      className="h-full lg:pl-10 pl-[5.5rem]"
      alt="Here I'd put an image of me - if the server would allow me!"
    />
  </div>
);

const Hero = () => (
  <div className="flex flex-col justify-center lg:w-1/2 sm:max-md:w-full h-full my-auto px-10 lg:px-0 lg:mr-32">
    <div className="text-center lg:text-left">
      <div className="flex flex-col justify-center lg:justify-start border-b-2 border-b-indigo-700/20 lg:mb-10 mb-4">
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <p className="font-medium text-indigo-700 text-xl">Oz Tamir</p>
        </div>

        <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl lg:mb-10 mb-4">
          ¯\_(ツ)_/¯ as a Service
        </h1>

        <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg lg:mb-10 mb-4">
          Hi, I’m <span className="text-indigo-800 font-bold mr-2">Oz</span> 👋
          <br />
          I'm currently working on R&D and Marketing over at{" "}
          <a href="https://blockaid.io" className="text-indigo-700">
            Blockaid
          </a>
          ,
          <br />
          but I never skip a chance to work on side projects - see my{" "}
          <a href="posts.oztamir.com" className="text-indigo-700">
            blog
          </a>{" "}
          for more.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between border-b-2 border-b-indigo-700/20 lg:mb-10 mb-4">
        <BlogPosts />
      </div>

      <Socials />
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
