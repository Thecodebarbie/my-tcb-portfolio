import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlight effects for visual enhancement */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>

      {/* Background with grid effect */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero content with animated text and introduction */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-purple max-w-80">
            The Code Barbie&apos;s Dev Hub
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts Into Seamless Experiences"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:lext-lg lg:text-2xl">
            Hi, I&apos;m Jael, also known as The Code Barbie. As a Full Stack
            Developer, I specialize in creating dynamic and seamless web
            experiences. With a passion for both front-end and back-end
            development, I bring innovative solutions to life, ensuring
            functionality meets aesthetic design. Explore my portfolio to see
            how I transform ideas into interactive realities.
          </p>

          <a href="#about">
            <MagicButton
            title="Show My Work"

            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
