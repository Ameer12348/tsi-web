"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationList = ({ id, ele }) => {
  const pathname = usePathname();

  return (
    <li
      className={`flex gap-3 items-center text-sm py-3 px-5    ${
        ele.link === pathname
          ? "bg-blue-100 text-blue-600 border-l-blue-700 border-l-2"
          : "text-gray-500"
      }`}
    >
      <i className={ele?.icon}></i>
      {/* <div className="h-5 w-5 bg-gray-500 rounded-[50%] "></div> */}
      <Link href={ele?.link}>{ele.name} </Link>
    </li>
  );
};

export default NavigationList;
