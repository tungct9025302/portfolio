import React from "react";
import { Kreon } from "next/font/google";

const kreon = Kreon({
  subsets: ["latin"],
  weight: "300",
});

export default function Bio({ data }: any) {
  return (
    <div className="snap-center">
      <div
        id="background_container"
        className="py-[90px] px-[30px] bg-[#292929] text-white"
      >
        {/* Title */}
        <div id="block" className="px-[5px] py-[15px] text-center">
          <h2 className={kreon.className + " text-[3.4em] leading-4"}>Bio</h2>
        </div>
        {/* Divider  */}
        <div id="block" className="text-center align-center my-[20px] mx-[5px]">
          <div id="divider-line" className="max-w-[100px]"></div>
        </div>
        {/* Description  */}
        <div
          id="block"
          className="py-[15px] px-[5px] w-[50%] m-0 m-auto flex flex-col justify-center"
        >
          <div
            id="description-content"
            className={kreon.className + " pb-[15px]"}
          >
            My name is ${data.firstname} ${data.lastname}. I'm 25 years old, and
            graduated with a Bachelor's degree in Computer Science.
          </div>
          <div id="description-content" className={kreon.className}>
            I'm a passionate Frontend Engineer with expertise in crafting
            captivating web experiences using ${data.framework} and various
            design approaches. My proficiency extends to .Net integration,
            enabling seamless backend communication for robust web applications.
            I thrive in collaborative environments, utilizing multiple libraries
            to build efficient and feature-rich React framework web apps.
          </div>
        </div>
        {/* Divider space  */}
        <div id="divider-space"></div>

        {/* Button  */}
        <div id="button-block" className={kreon.className}>
          <a
            href="/"
            id="button"
            className=" font-normal text-[1em] uppercase tracking-widest border-0 border-solid rounded-[50px] relative py-[10px] px-[15px] cursor-pointer inline-block box-border text-center outline outline-offset-0 hover:bg-white hover:text-black hover:opacity-60 hover:b-white"
          >
            More details
          </a>
        </div>
      </div>
    </div>
  );
}
