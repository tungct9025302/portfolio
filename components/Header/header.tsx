import React from "react";
import Link from "next/link";
import { Abril_Fatface } from "next/font/google";
import { Kreon } from "next/font/google";

const abrilFatface = Abril_Fatface({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

const kreon = Kreon({
  weight: "300", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

export default function Header() {
  function getCurrentDate() {
    const date = new Date().toDateString();
    return date;
  }

  return (
    <section id="header">
      <div className="items-center justify-between mx-3 row-container">
        <div id="logo" className={abrilFatface.className}>
          <p>Portfolio</p>
        </div>

        <nav id="nav-bar">
          <div className="group">
            <a href="" id="nav-item" className={kreon.className}>
              HOME
            </a>
            <div className="mx-2 group-hover:border-b group-hover:border-white-500"></div>
          </div>

          <div className="group">
            <a href="/" id="nav-item" className={kreon.className}>
              BIO
            </a>
            <div className="mx-2 group-hover:border-b group-hover:border-white-500"></div>
          </div>

          <div className="group">
            <a href="/" id="nav-item" className={kreon.className}>
              Dream Career
            </a>
            <div className="mx-2 group-hover:border-b group-hover:border-ite-500"></div>
          </div>

          <div className="group">
            <a href="/" id="nav-item" className={kreon.className}>
              Footages
            </a>
            <div className="mx-2 group-hover:border-b group-hover:border-white-500"></div>
          </div>

          <div className="group">
            <a href="/" id="nav-item" className={kreon.className}>
              Connect me
            </a>
            <div className="mx-2 group-hover:border-b group-hover:border-white-500"></div>
          </div>
        </nav>
      </div>

      {/* <Link href="/">Home</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/Scale">Scale</Link> */}
      <div className="max-w-[2000px] m-0 m-auto font-[110%] text-white md:px-[90px] md:py-[30px]">
        {/* Top divider  */}
        <div className="px-[15px] relative text-center perspective-8">
          <div id="space"></div>
          <div id="divider-line" className="max-w-[600px]"></div>
        </div>
        {/* Home title  */}
        <div className="py-[15px] relative text-center perspective-8">
          <h2
            className={
              kreon.className +
              " text-[3.5em] normal-case leading-[1.5em] tracking-tight uppercase"
            }
          >
            Welcome to my Portfolio
          </h2>
          <div className="px-[15px] py-[15px]">
            <h3
              className={
                kreon.className +
                " text-[1.5em] normal-case leading-[1.5em] tracking-tight uppercase text-[#ff7272]"
              }
            >
              {getCurrentDate()}
            </h3>
          </div>
        </div>
        {/* Home buttons  */}
        <div className="px-[15px] relative text-center perspective-8">
          <div id="divider-line" className="max-w-[600px]"></div>
          <div id="space"></div>
        </div>

        <div className="py-[15px] px-[5px] row-container justify-center">
          <div
            id="button-block"
            className="border-2 border-solid rounded-[50px] flex flex-row relative cursor-pointer box-border hover:text-black hover:opacity-60 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:font-normal mr-[10px]"
          >
            <div id="button-icon">
              {/* <Image src={MusicIcon} alt="" className="" /> */}
            </div>
            <div id="button-content" className={kreon.className}>
              Bio
            </div>
          </div>
          <div
            id="button-block"
            className="border-2 border-solid rounded-[50px] flex flex-row relative cursor-pointer box-border hover:bg-gradient-to-r from-indigo-500 to-green-500 hover:text-black hover:opacity-60"
          >
            <div id="button-icon">
              {/* <Image src={ShoppingCartIcon} alt="" /> */}
            </div>
            <div id="button-content" className={kreon.className}>
              My targets
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
