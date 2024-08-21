"use client";
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import NavigationList from "@/app/_components/sidebar/NavigationList";

const DashboardSideBarNavigation = ({ children, navigationList }) => {
  const [sideNavShow, setSideNavShow] = useState(true);
  return (
    <>
      <div className="flex  bg-[#f3f3f3] h-screen">
        <div
          className={`duration-200 h-full ${
            sideNavShow ? "xl:w-[300px]  " : "w-0  "
          } `}
        ></div>
        {/* empty container 300px  end  */}
        <div className="flex-1">
          <div className="bg-white  py-2 px-5 sticky top-0">
            <button
              className={` inline-flex justify-center items-center  outline-0 text-3xl p-1 mx-3 duration-0  ${
                sideNavShow
                  ? " [transform:rotateY(0deg)]"
                  : " [transform:rotateY(180deg)]"
              }`}
              onClick={() => setSideNavShow(!sideNavShow)}
            >
              <div
                className={`inline-block duration-200  ${
                  sideNavShow ? "max-xl:w-[300px]  " : "w-0  "
                }`}
              ></div>{" "}
              <MdMenuOpen />
            </button>
          </div>
          <div className="w-full h-[calc(100vh-55.9688px)] 2xl:container">
            {children}
          </div>
        </div>
      </div>
      <div
        className={`w-[300px] fixed top-0 duration-200  p-4 h-screen bg-white scrollbar-thin scrollbar-thumb-gray-300  scrollbar-track-transparent  overflow-y-scroll ${
          sideNavShow ? "left-0" : "-left-full"
        } `}
      >
        <div className="flex justify-between items-center mb-2">
          <h5 className="px-1.5  text-gray-800 font-medium  text-lg">Menu</h5>
          <button
            className="min-[500px]:hidden "
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
