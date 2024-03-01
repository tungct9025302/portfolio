import Image from "next/image";
import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function Carousel({ slides }: any) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(4);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1 || current === 4) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 28}%)`,
        }}
      >
        {slides.map((s: any, i: any) => {
          return (
            <Image
              key={i}
              alt=""
              src={s.image}
              className="hover:saturate-100 h-[100%] max-h-[500px]"
            ></Image>
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
        </button>
      </div>
    </div>
  );
}
