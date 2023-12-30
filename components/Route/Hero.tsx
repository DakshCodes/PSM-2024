"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import line from "@/public/Assets/line.png";
import MarQuee from "react-fast-marquee";

type Props = {};

const rowOneImages = [
  {
    url: "https://i.pinimg.com/564x/e4/e7/e8/e4e7e8f49d9dc2c58767b318e1e85ed1.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/06/93/ac/0693aca12fb4563b19c2741d1ea9a1cd.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/a2/fa/e4/a2fae4ea0c896c726c566feaaad96db2.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/84/ea/28/84ea28ed5ab8733f7296c801849653ee.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/1d/ef/66/1def665f25a2b20f894068c0df92ea40.jpg",
  },
];

const rowTwoImages = [
  {
    url: "https://i.pinimg.com/564x/f5/9a/8b/f59a8b4c8e11b7dd8bfca2c757dbe7a8.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/09/ff/3e/09ff3e776ffdf7f7be5327c075f0b388.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/2e/0f/11/2e0f11bef4afee915d581584cd7e6a0c.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/a0/c9/f5/a0c9f537efc2a6dcbb8994858bb48de5.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/03/36/f5/0336f5dbe566677972bfdaf5d09ff0d7.jpg",
  },
];

const Hero = (props: Props) => {
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setmounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full pt-28 md:min-h-screen flex items-center justify-center">
      <div>
        <h1 className="cursor-pointer font-Monserrat text-4xl py-5 xl:text-7xl 2xl:text-9xl font-[700] text-center xl:leading-[80px] 2xl:leading-[120px] sm:mt-20">
          Transforming Vision <br />Into <br /><span className="text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500">Ai Generated</span>
          <br /> Images.
        </h1>
        <div className="md:mt-5">
          <Image
            src={line}
            alt=""
            className="absolute hidden md:block"
            width={2000}
            height={2}
          />
        </div>
        <div className="w-[100vw] overflow-hidden  mb-5 md:mb-20 relative">
          <div className="overflow-hidden rotate-[-4deg] z-[0] mt-10 md:mt-[7rem]">
            <MarQuee>
              {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] object-cover m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
            <MarQuee>
              {rowTwoImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
