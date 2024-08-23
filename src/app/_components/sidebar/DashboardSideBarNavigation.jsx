"use client";
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import NavigationList from "@/app/_components/sidebar/NavigationList";

const DashboardSideBarNavigation = ({ children, navigationList }) => {
  const [sideNavShow, setSideNavShow] = useState(true);
  return (
    <>
      <div className="flex h-screen bg-[#f3f3f3]">
        <div
          className={`h-full duration-200 ${
            sideNavShow ? "xl:w-[300px]" : "w-0"
          } `}
        ></div>
        {/* empty container 300px  end  */}
        <div className="flex-1">
          <div className="sticky top-0 z-[1000000] bg-white px-5 py-2">
            <button
              className={`mx-3 inline-flex items-center justify-center p-1 text-3xl outline-0 duration-0 ${
                sideNavShow
                  ? "[transform:rotateY(0deg)]"
                  : "[transform:rotateY(180deg)]"
              }`}
              onClick={() => setSideNavShow(!sideNavShow)}
            >
              <div
                className={`inline-block duration-200 ${
                  sideNavShow ? "max-xl:w-[300px]" : "w-0"
                }`}
              ></div>{" "}
              <MdMenuOpen />
            </button>
          </div>
          <div className="scrollbar-thin h-[calc(100vh-60px)] w-full overflow-y-scroll 2xl:container">
            {children}
          </div>
        </div>
      </div>
      <div
        className={`scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent fixed top-0 h-screen w-[300px] overflow-y-scroll bg-white p-4 duration-200 ${
          sideNavShow ? "left-0" : "-left-full"
        } `}
      >
        <div className="mb-2 flex items-center justify-between">
          <h5 className="px-1.5 text-lg font-medium text-gray-800">Menu</h5>
          <button
            className="min-[500px]:hidden"
            onClick={() => setSideNavShow(!sideNavShow)}
          >
            Close
          </button>
        </div>
        <ul>
          {navigationList.map((ele, index) => {
            return <NavigationList key={index} ele={ele} />;
          })}
        </ul>
      </div>
      {/* fixed container that containes sidebar nav  links  */}
    </>
  );
};

export default DashboardSideBarNavigation;
