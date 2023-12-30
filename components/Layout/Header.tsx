import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
// import { UserProfile } from "@clerk/nextjs";
// import { User } from "@clerk/nextjs/server";
import DropDown from "./DropDown";
import Image from "next/image";
import Logo from '@/public/Assets/Logo.png'
import { useAuth } from "@/context/auth";

type Props = {
  activeItem: number;
  user: [] | undefined;
};


const Header = ({ user, activeItem}: Props) => {
  const [active, setactive] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);


  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setactive(true);
      } else {
        setactive(false);
      }
    });
  }

  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === "screen") {
      setOpen(!open);
    }
  };

  const handleProfile = () => {
    setActiveProfile(!activeProfile);
  };

  return (
    <div
      className={`w-full p-7  min-h-[40px] fixed top-0 left-0 duration-400  transition-opacity ${active && "fixed top-0 left-0  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40  z-[9999]"
        }`}
    >
      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-3xl cursor-pointer">
              <Image
                src={Logo}
                alt="logo"
                width={180}
              />
            </h1>
          </Link>
        </div>
        <div className="flex">
          <Navigation activeItem={activeItem} />
        </div>
        <div className="flex items-center ml-10">
          <AiOutlineSearch className="text-[30px] mr-5 cursor-pointer" />
          {user ? (
            <div>
              <DropDown
                user={user}
                setOpen={setOpen}
                handleProfile={handleProfile}
              />
            </div>
          ) : (
            <Link href="/login">
              <CgProfile className="text-[30px] cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
      {activeProfile && (
        <div className="w-full fixed h-screen overflow-hidden flex justify-center items-center top-0 left-0 bg-[#00000068] !z-[99999]">
          <div className="w-min relative h-[90vh] overflow-y-scroll bg-white rounded-xl shadow">
            <RxCross1
              className="absolute text-black text-2xl top-10 right-10 cursor-pointer"
              onClick={handleProfile}
            />
          </div>
        </div>
      )}

      {/* for mobile screen */}
      <div className="w-full md:hidden flex items-center z-[999999] justify-between">
        <div className="z-[999999]">
          <Link href="/">
            <h1>
              <Link href={"/"}>
                <h1 className="font-Inter text-3xl cursor-pointer">
                  <Image
                    src={Logo}
                    alt="logo"
                    width={180}
                  />
                </h1>
              </Link>
            </h1>
          </Link>
        </div>
        <div>
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        {open && (
          <div
            className="fixed md:hidden w-full h-screen top-0 left-0 z-[999999] bg-[unset]"
            onClick={handleClose}
            id="screen"
          >
            <div className="fixed bg-black h-screen top-0 right-0 max-w-[40%] !z-[999999999999]">
              <div className=" flex flex-col p-10">
                <Navigation activeItem={activeItem} />
                {user && (
                  <DropDown
                    user={user}
                    setOpen={setOpen}
                    handleProfile={handleProfile}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
