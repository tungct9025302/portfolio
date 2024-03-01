import React from "react";
import "../../app/globals.css";
import { Kreon, Bitter } from "next/font/google";
import Image from "next/image";
import Facebook_White from "../../public/facebook_white_icon.svg";
import Twitter_White from "../../public/twitter_white_icon.svg";
import Instagram_White from "../../public/instagram_white_icon.svg";
import Linkedin_White from "../../public/linkedin_white_icon.svg";

import HighSchoolImage from "../../public/high_school_image.jpeg";
import UniversityImage from "../../public/university_image.jpeg";
import MasterImage from "../../public/master.jpeg";

const kreon = Kreon({
  subsets: ["latin"],
  weight: "300",
});

const bitter = Bitter({
  subsets: ["latin"],
});

export default function Footer({ data }: any) {
  const socialLinks = [
    {
      link: `${data.facebook}`,
      icon: Facebook_White,
      size: "24px",
    },
    {
      link: `${data.instagram}`,
      icon: Instagram_White,
      size: "28px",
    },
    {
      link: `${data.linkedin}`,
      icon: Linkedin_White,
      size: "28px",
    },
    {
      link: `${data.twitter}`,
      icon: Twitter_White,
      size: "28px",
    },
  ];

  function displaySocialLinks() {
    return socialLinks.map((entity) => {
      return (
        <a href={entity.link} target="_blank">
          <Image
            alt=""
            src={entity.icon}
            className={`hover:cursor-pointer sm:w-[${entity.size}px]`}
          ></Image>
        </a>
      );
    });
  }

  return (
    <div id="snap-center">
      <div
        id="background"
        className="flex b-0 px-[30px] py-[50px] bg-[#292929] text-white"
      >
        <div className={kreon.className + " w-[100%] relative row-container"}>
          {/* Section About  */}
          <div id="block" className="w-[41.67%]">
            <div id="title">
              <h2>ABOUT</h2>
            </div>
            <div id="content">
              <p>
                The template is created for personal usage only. <br></br>
                Please reach me via the email yesphuocthinh451999@gmail.com for
                consent to use the template.
              </p>
            </div>
          </div>

          {/* Recent Posts Section */}
          <div id="block" className="w-[33.33%]">
            <div id="title">
              <h2>Recent Milestones</h2>
            </div>
            <div id="content" className="flex flex-col space-y-2">
              {/* Item 1  */}
              <div className="row-container">
                <div id="item-image">
                  <Image
                    alt=""
                    src={HighSchoolImage}
                    id="item-image"
                    className="cursor-pointer"
                  ></Image>
                </div>
                <div className="column-container">
                  <div id="item-title">Highschool</div>
                  <div id="item-date">September 1st, 2014</div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="row-container">
                <div id="item-image">
                  <Image
                    alt=""
                    src={UniversityImage}
                    id="item-image"
                    className="cursor-pointer"
                  ></Image>
                </div>
                <div className="column-container">
                  <div id="item-title">University</div>
                  <div id="item-date">September 1st, 2017</div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="row-container">
                <Image
                  alt=""
                  src={MasterImage}
                  id="item-image"
                  className="cursor-pointer"
                ></Image>
                <div className="column-container">
                  <div id="item-title">Master</div>
                  <div id="item-date">January 10th, 2024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Section*/}
          <div id="block" className="w-[25%]">
            <div id="title" className="hover:cursor-pointer">
              <h2>Channels</h2>
            </div>
            <div className="p-[15px] mt-[-5px] flex flex-col sm:space-y-2 md:flex-row md:items-center md:space-between md:space-x-5">
              {displaySocialLinks()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
