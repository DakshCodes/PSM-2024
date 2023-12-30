import Link from "next/link";
import React from "react";

type Props = {
  activeItem: number;
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Policy",
    href: "/policy",
  },
];

const Navigation = ({ activeItem }: Props) => {
  return (
    <div className="block md:flex ">
      {navItems.map((item, index) => (
        <Link key={item.title} href={item.href}>
          <h5
            className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[900] font-Inter transition-all duration-300  hover:text-transparent hover:bg-clip-text hover:leading-12 hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-500 ${activeItem === index && " text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500"
              }`}
          >
            {item.title}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
