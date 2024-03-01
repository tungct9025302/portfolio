"use client";
import React from "react";
import { Kreon } from "next/font/google";
import Image from "next/image";
import JobIcon from "../../public/job.svg";
import PersonIcon from "../../public/person.svg";

const kreon = Kreon({
  subsets: ["latin"],
});

export default function Targets() {
  const [state, setState] = React.useState(0);
  const [animation, setAnimation] = React.useState(false);
  const [cssButton1, setCssButton1] = React.useState("");
  const [cssButton2, setCssButton2] = React.useState("");

  function handleOnclick(param: number) {
    if (state == param) {
      setState(0);

      if (param == 1) {
        setCssButton1("");
        renewAnimation();
      } else {
        setCssButton2("");
        renewAnimation();
      }
    } else {
      setState(param);
      if (param == 1) {
        setCssButton1(
          "text-black opacity-60 bg-gradient-to-r from-sky-500 to-indigo-500 font-normal"
        );
        setCssButton2("");
      } else {
        setCssButton2(
          "text-black opacity-60 bg-gradient-to-r from-indigo-500 to-green-500 font-normal"
        );
        setCssButton1("");
      }
      renewAnimation();
    }
  }

  function renewAnimation() {
    setAnimation(true);
    setTimeout(function () {
      setAnimation(false);
    }, 1000);
  }

  function getContent() {
    switch (state) {
      case 1:
        return (
          <>
            <div className="py-[15px] px-[5px]">
              <div id="title-content" className={kreon.className}>
                A life with journeys
              </div>
            </div>
            <div
              id="block"
              className="py-[15px] px-[5px] relative flex flex-col justify-center items-center text-center text-black"
            >
              <div
                id="description-content"
                className={kreon.className + " pb-[20px] "}
              >
                May your journeys challenge you, push you beyond your comfort
                zone, and help you discover hidden depths within yourself. May
                you return home not just with a suitcase full of memories, but
                with a heart overflowing with empathy, understanding, and a
                renewed appreciation for the beauty and diversity of our world.
              </div>
              <div id="description-content" className={kreon.className}>
                Visited countries:{" "}
                <b>German, Singapore, Malaysia, France, Sweden</b>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="py-[15px] px-[5px]">
              <div id="title-content" className={kreon.className}>
                Game Developer - A career of Play-n-Work
              </div>
            </div>
            <div
              id="block"
              className="py-[15px] px-[5px] relative flex flex-col justify-center items-center text-center"
            >
              <div
                id="description-content"
                className={kreon.className + " pb-[20px] text-black"}
              >
                Dreaming of being a game developer is about more than just
                playing games. It's about:
                <br />
                <br /> <b>Creation</b>: Molding pixels and code into living
                worlds, characters, and stories. The joy of seeing your
                imagination come to life and players interact with it.
                <br /> <b>Expression</b>: Using your technical and creative
                skills to craft unique experiences that entertain, challenge,
                and move people. Weaving ideas and emotions into the fabric of
                gameplay.
                <br /> <b>Impact</b>: Connecting with players on a deep level,
                fostering communities, and shaping how people spend their
                leisure time. Knowing your work can bring joy, escape, and even
                learning to others.
                <br /> <b>Challenge</b>: Pushing boundaries, solving complex
                problems, and constantly learning new technologies and
                storytelling techniques. The thrill of overcoming obstacles and
                seeing your game thrive.
              </div>
              <div
                id="description-content"
                className={kreon.className + " text-black"}
              >
                But remember, like any dream, it requires dedication. Be
                prepared for hard work, setbacks, and the ever-evolving
                landscape of the industry.
                <br /> Do you see this creative spark, this drive to build, in
                your own dream of being a game developer?
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="py-[15px] px-[5px]">
              <div id="title-content" className={kreon.className}>
                My targets
              </div>
            </div>
            <div
              id="block"
              className="py-[15px] px-[5px] relative flex flex-col justify-center items-center text-center text-black"
            >
              <div
                id="description-content"
                className={kreon.className + " pb-[20px] text-black"}
              >
                Imagine navigating a vast ocean without a lighthouse. Life
                without targets is like this aimless journey. Targets, big or
                small, provide direction and purpose. They ignite our passion,
                motivate action, and offer milestones to celebrate. Hitting a
                target fuels confidence, while missing one sparks learning and
                course correction. Like guiding stars, targets illuminate the
                path, making our journey through life meaningful, fulfilling,
                and full of possibility.
              </div>
              <div id="description-content" className={kreon.className}>
                Let your dreams come true not by wishing to the stars but
                chasing them. You can find out my targets by hitting the below
                buttons.
              </div>
            </div>
          </>
        );
    }
  }

  return (
    //Snap center for background image
    <div className="snap-center">
      {/* Container for background  */}
      <div
        id="background_container"
        className="px-[30px] py-[90px] m-auto bg-[#ff7272] text-white"
      >
        <div id="row">
          <div id="image-block">
            <div id="image-content">
              <img
                className="max-w-[500px] opacity-90"
                src="https://c4.wallpaperflare.com/wallpaper/186/380/857/your-name-sky-stars-kimi-no-na-wa-wallpaper-preview.jpg"
                alt=""
              ></img>
            </div>
          </div>
          <div
            id="block"
            className="w-[58.33%] py-[15px] px-[5px] relative flex flex-col justify-center items-center text-center"
          >
            <section className={` ${animation ? "animate-pulse" : ""}`}>
              {getContent()}
            </section>

            <div className="py-[15px] px-[5px] row-container">
              <div
                id="button-block"
                className={
                  "border-2 border-solid rounded-[50px] flex flex-row relative cursor-pointer box-border hover:text-black hover:opacity-60 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:font-normal mr-[10px] " +
                  cssButton1
                }
                onClick={() => handleOnclick(1)}
              >
                <div id="button-icon">
                  <Image src={PersonIcon} alt="" className="" />
                </div>
                <div id="button-content" className={kreon.className}>
                  Life
                </div>
              </div>
              <div
                id="button-block"
                className={
                  "border-2 border-solid rounded-[50px] flex flex-row relative cursor-pointer box-border hover:bg-gradient-to-r from-indigo-500 to-green-500 hover:text-black hover:opacity-60 " +
                  cssButton2
                }
                onClick={() => handleOnclick(2)}
              >
                <div id="button-icon">
                  <Image src={JobIcon} alt="" />
                </div>
                <div id="button-content" className={kreon.className}>
                  Career
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
