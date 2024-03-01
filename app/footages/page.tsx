"use client";
import React from "react";
import Carousel from "../../components/Carousel/carousel.component";

import { Kreon } from "next/font/google";

import Post1_Image from "../../public/footage1.jpeg";
import Post2_Image from "../../public/footage2.jpeg";
import Post3_Image from "../../public/footage3.jpg";
import Post4_Image from "../../public/footage4.jpeg";
import Post5_Image from "../../public/footage5.jpeg";
import Post6_Image from "../../public/footage6.jpeg";
import Post7_Image from "../../public/footage7.jpg";
import Post8_Image from "../../public/footage8.jpg";

const kreon = Kreon({
  subsets: ["latin"],
  weight: "300",
});

const sampleImages = [
  {
    image: Post1_Image,
    title: "Graduation Ceremony",
    description: "From grandstand",
  },
  {
    image: Post2_Image,
    title: "Graduation Ceremony",
    description: "Official announcement",
  },
  {
    image: Post4_Image,
    title: "Graduation Ceremony",
    description: "Bachelor degree",
  },
  {
    image: Post3_Image,
    title: "German Scholarship",
    description: "Homies from the Underground",
  },
  {
    image: Post5_Image,
    title: "German Scholarship",
    description: "Eiserner Steg - Iron Footbridge",
  },
  {
    image: Post6_Image,
    title: "German Scholarship",
    description: "Die Hauptbahnof",
  },
  {
    image: Post7_Image,
    title: "First Company Trip - Bosch",
    description: "Nomination award",
  },
  {
    image: Post8_Image,
    title: "First Company Trip - Bosch",
    description: "Hiking contest",
  },
];

export default function Footages() {
  return (
    <div>
      <div className="snap-center">
        <div
          id="background_container"
          className="py-[90px] px-[30px] bg-[#292929] text-white"
        >
          {/* Title */}
          <div id="block" className="py-[15px] px-[5px] text-center">
            <h2 className={kreon.className + " text-[3.4em]"}>
              Footages of Life
            </h2>
          </div>
          {/* Space divider  */}
          <div id="space" />

          <div id="block" className="p-[15px] align-center">
            <div className="w-[100%] row-container">
              {/* Posts content  */}
              <div id="row-center-container" className="w-[100%]">
                <Carousel slides={sampleImages}></Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
