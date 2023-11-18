"use client";
import { styles } from "@/utils/styles";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const About = (props: Props) => {
  const router = useRouter();

  return (
    <div className="w-full bg-contain bg-[url(https://i.pinimg.com/564x/a3/88/d3/a388d3f72859a0357a3468150c885eae.jpg)] relative grid md:grid-cols-2 md:py-36">
      <div className="col-span-1 w-full md:w-[100%] flex justify-center items-center flex-col  md:px-[unset]">
        <h5 className={`${styles.heading} text-center mb-5 !leading-[90px]`}>
          Crafting Tomorrow&apos;s Images With Artificial Intelligence
        </h5>
        <p className={`${styles.paragraph} text-center pb-5`}>
          AI image generation tools have emerged as powerful resources in the
          realm of digital art and design. These cutting-edge tools leverage
          advanced.
        </p>
        <Button
          className={`${styles.button} bg-[#2551b0] font-[500] h-[45px]`}
          onClick={() => router.push("/marketplace")}
        >
          Visit Shop
        </Button>
      </div>
      <div className="col-span-1 my-10 md:mt-[unset]">
        <Image
          src={"https://i.pinimg.com/564x/84/be/5b/84be5b5d6c60d2446b8fa26240956b2e.jpg"}
          alt=""
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
};

export default About;
