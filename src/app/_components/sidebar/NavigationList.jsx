"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationList = ({ ele }) => {
  const pathname = usePathname();

  return (
    <li
      className={`flex items-center gap-3 px-5 py-3 text-sm ${
        ele.link === pathname
          ? "border-l-2 border-l-blue-700 bg-blue-100 text-blue-600"
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
