import React from "react";
import Image from "next/image";
import FacebookIcon from "../../public/facebook_icon.svg";
import TwitterIcon from "../../public/twitter_icon.svg";
import InstagramIcon from "../../public/instagram_icon.svg";
import LinkedinIcon from "../../public/linkedin_icon.svg";
import YoutubeIcon from "../../public/youtube_icon.svg";

export default function Social({ data }: any) {
  return (
    <>
      {/* Social links section  */}
      <section id="social">
        <div className="snap-center">
          <div
            id="fixed_background_container"
            className="bg-[url('../public/social_bg.jpeg')] no-repeat w-[100%] h-[30vh] l-0 overflow-hidden decoration-transaprent"
            style={{
              boxShadow: "currentColor 0 0 0 10000px inset",
              color: "rgba(255, 248, 232, 0.08)",
            }}
          >
            <div className="h-[100%] justify-center items-center row-container">
              <a
                id="icon"
                href={data.facebook}
                className="hover:bg-gradient-to-r from-pink-500 to-white-500 hover:text-black hover:opacity-90"
                style={{
                  borderColor: "rgb(255, 71, 142)",
                }}
                target="_blank"
              >
                <Image src={FacebookIcon} alt=""></Image>
              </a>
              <a
                id="icon"
                href={data.twitter}
                style={{
                  borderColor: "rgb(255, 71, 142)",
                }}
                className="hover:bg-gradient-to-r from-purple-500 to-white-500 hover:text-black hover:opacity-90"
                target="_blank"
              >
                <Image src={TwitterIcon} alt=""></Image>
              </a>

              <a
                id="icon"
                href={data.instagram}
                className="hover:bg-gradient-to-r from-sky-500 to-white-500 hover:text-black hover:opacity-90"
                style={{
                  borderColor: "rgb(255, 71, 142)",
                }}
                target="_blank"
              >
                <Image src={InstagramIcon} alt=""></Image>
              </a>
              <a
                id="icon"
                href={data.linkedin}
                className="hover:bg-gradient-to-r from-red-500 to-white-500 hover:text-black hover:opacity-90"
                style={{
                  borderColor: "rgb(255, 71, 142)",
                }}
                target="_blank"
              >
                <Image src={LinkedinIcon} alt=""></Image>
              </a>
              <a
                id="icon"
                href=""
                className="hover:bg-gradient-to-r from-green-500 to-white-500 hover:text-black hover:opacity-90"
                style={{
                  borderColor: "rgb(255, 71, 142)",
                }}
              >
                <Image src={YoutubeIcon} alt=""></Image>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
