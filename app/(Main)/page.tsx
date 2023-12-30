"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Layout/Header";
import Hero from "@/components/Route/Hero";
import About from "@/components/Route/About";
import Image from "next/image";
import { styles } from "@/utils/styles";
import PromptCard from "@/components/Prompts/PromptCard";
import BestSellers from "@/components/Shop/BestSellers";
import Future from "@/components/Route/Future";
import Partners from "@/components/Route/Partners";
import SellersBanner from "@/components/Shop/SellersBanner";
import Footer from "@/components/Layout/Footer";
import { Divider } from "@nextui-org/react";
import { useAuth } from "@/context/auth";
import Loader from "@/components/loader/Loader";
import { useLoading } from "@/context/Loading";


const Page = () => {
  const [loading, setLoading] = useLoading();
  const [auth, setAuth] = useAuth();


  return (
    <>
      {
        loading && (
          <Loader />
        )
      }
      <div className="banner">
        <Header activeItem={0} user={auth?.user}  />
        <Hero />
      </div>
      <Image
        src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
        width={120}
        height={120}
        alt=""
        className="absolute right-[30px]"
      />
      <br />
      <div className="overflow-hidden w-[100%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
        <About />
        <div>
          <h1 className={`${styles.heading} p-2 font-Monserrat`}>
            Latest Prompts
          </h1>
          <div className="w-full flex flex-wrap mt-5">
            <PromptCard />
          </div>
          <br />
          <BestSellers />
          <Future />
          <Partners />
          <SellersBanner />
          <br />
          <br />
          <Divider className="bg-[#ffffff23]" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
