"use client";
import Image from "next/image";
import { useState } from "react";
const MessagesComponent = () => {
  const [showMessagesAfterBreak, setshowMessagesAfterBreak] = useState(false);

  return (
    <div className="px-2 py-3 gap-2 flex h-screen 2xl:container">
      <div
        className={`bg-white  px-5 rounded-lg  scrollbar-thin scrollbar-thumb-gray-300  scrollbar-track-transparent  overflow-y-scroll h-full pb-2 w-[40%] ${
          showMessagesAfterBreak
            ? " max-[1300px]:hidden "
            : "max-[1300px]:w-[100%]"
        }`}
      >
        <div className="flex justify-between items-center gap-2 sticky top-0 bg-white py-5">
          <div className="flex items-center border border-gray-300 p-2 rounded flex-1">
            <input
              className="outline-0 flex-1 text-gray-500"
              placeholder="Search"
              type="text"
            />
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
          </div>
          {/* search field end  */}
          <div>
            <select className="outline-0  text-gray-500">
              <option value="relevent">Relevent</option>
              <option value="unread">Unread</option>
            </select>
          </div>
          {/* filteration end  */}
        </div>
        {/* seacrh and filteration end  */}
        <div className="pt-4">
          {Array.from({ length: 20 }).map((el, idx) => {
            return (
              <div
                key={idx}
                className={`flex gap-2 items-stretch py-3.5  border-dashed border-gray-300 cursor-pointer ${
                  idx === 20 - 1 ? "" : "border-b"
                } `}
                onClick={() => setshowMessagesAfterBreak(true)}
              >
                <figure>
                  <Image
                    className="object-cover w-14 h-14 rounded-circle aspect-square"
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
                    }
                    alt=""
                    width={100}
                    height={100}
                  />
                </figure>
                <div className="flex-1 flex flex-col justify-between  py-0.5">
                  <h3 className="font-semibold">Node js Developer</h3>
                  <h4 className="text-sm text-gray-700 font-medium">
                    Ok thanks{" "}
                  </h4>
                </div>
                <div className=" flex flex-col justify-between  py-0.5">
                  <h4 className="text-sm text-gray-700 font-medium">22:50 </h4>
                  <div className="flex justify-center">
                    <h5 className="w-6 h-6 bg-blue-600 rounded-circle text-white flex justify-center items-center">
                      <span>4</span>
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* chats cards container end  */}
      </div>
      {/* chat people end  */}
      <div
        className={`bg-white w-[60%]  px-5 rounded-lg flex flex-col ${
          showMessagesAfterBreak
            ? " max-[1300px]:w-full "
            : "max-[1300px]:hidden"
        }`}
      >
        <div className="flex gap-2 items-stretch  py-3  bg-white sticky top-0  border-dashed border-gray-300 border-b">
          <button
            className="px-3 font-medium hidden  max-[1300px]:inline-block text-xl"
            onClick={() => setshowMessagesAfterBreak(false)}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <figure>
            <Image
              className="object-cover w-14 h-14 rounded-circle aspect-square"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
              }
              alt=""
              width={100}
              height={100}
            />
          </figure>
          <div className="flex-1 flex flex-col justify-between  py-0.5">
            <h3 className="font-semibold">Senior React js Developer</h3>
            <h4 className="text-sm text-gray-700 font-medium">
              Mark ZuckerBurg
            </h4>
          </div>
          <div className=" flex flex-col justify-center  ">
            <button className="text-2xl px-2 text-gray-600">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
        </div>
        {/* user details  */}
        <div className="py-5 scrollbar-thin scrollbar-thumb-gray-300  scrollbar-track-transparent  overflow-y-scroll flex-1">
          <div className="flex justify-center mb-3">
            <h3 className="bg-gray-100 font-medium text-gray-600 py-1 px-3 rounded-full">
              {new Date().toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </h3>
          </div>
          <div className="flex justify-start">
            <div className="mb-3 bg-gray-100  max-w-[85%]   p-4 pb-2 rounded-md">
              <p className=" font-medium text-gray-600 mb-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, pariatur quod fugit quasi tenetur ea ipsam est
                consequuntur voluptatibus at, modi eveniet iure assumenda
                tempore aspernatur rem! Nisi, rem sapiente?
              </p>
              <div className="text-right text-[12px]  font-medium text-gray-400">
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>
          </div>
          {/* message box end you  */}
          <div className="justify-start flex">
            <div className="mb-3 bg-gray-100  max-w-[85%]   p-4 pb-2 rounded-md">
              <p className=" font-medium text-gray-600 mb-0.5">
                Lorem ipsum dolor rem! Nisi, rem sapiente?
              </p>
              <div className="text-right text-[12px]  font-medium text-gray-400">
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>
          </div>
          {/* message box end by you */}
          <div className="justify-end  flex">
            <div className="mb-3 bg-blue-600  max-w-[85%]   p-4 pb-2 rounded-md">
              <p className=" font-medium text-white mb-0.5">
                Lorem ipsum dolor rem! Nisi, rem sapiente?
              </p>
              <div className="text-right text-[12px]  font-medium text-gray-50">
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>
          </div>
          {/* message box end  by me */}
          <div className="justify-end  flex">
            <div className="mb-3 bg-blue-600  max-w-[85%]   p-4 pb-2 rounded-md">
              <p className=" font-medium text-white mb-0.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque quasi quos a nesciunt quaerat vitae, aspernatur ipsa
                libero quas, sequi at necessitatibus deleniti ratione porro
                cupiditate vero tempora et temporibus tempore id! Necessitatibus
                quod obcaecati rerum ipsum placeat nihil aliquam.
              </p>
              <div className="text-right text-[12px]  font-medium text-gray-50">
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>
          </div>
          {/* message box end by me  */}
          <div className="flex justify-start">
            <div className="mb-3 bg-gray-100  max-w-[85%]   p-4 pb-2 rounded-md">
              <p className=" font-medium text-gray-600 mb-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, pariatur quod fugit
              </p>
              <div className="text-right text-[12px]  font-medium text-gray-400">
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>
          </div>
          {/* message box end by you  */}
          <div className="justify-end  flex">
            <div className="mb-3 bg-blue-600  max-w-[85%]   p-4 pb-2 rounded-md">
              <p className=" font-medium text-white mb-0.5">
                Lorem ipsum, dolor sit amet consectetur
              </p>
              <div className="text-right text-[12px]  font-medium text-gray-50">
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>
          </div>
          {/* message box end by me  */}
          <div className="flex justify-start">
            <div className="mb-3 bg-gray-100  max-w-[85%]   p-4 pb-2 rounded-md">
              <p className=" font-medium text-gray-600 mb-0.5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium excepturi perferendis quis neque repudiandae sequi
                totam, dolorem molestias unde sint.
              </p>
              <div className="text-right text-[12px]  font-medium text-gray-400">
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>
          </div>
          {/* message box end by you  */}
        </div>
        {/* chats end  */}
        <div className="bg-white pb-5 pt-2">
          <div className="flex items-center border bg-gray-100 py-3 px-5 rounded-xl flex-1 gap-5 ">
            <button>
              <i className="fa-solid fa-paperclip text-gray-900 text-xl"></i>
            </button>
            <input
              className="outline-0 flex-1 text-gray-500 bg-transparent"
              placeholder="Search"
              type="text"
            />
            <button>
              <i className="fa-regular fa-pen-to-square text-gray-900 text-xl"></i>
            </button>
            <button>
              <i className="fa-regular fa-paper-plane text-blue-800 text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      {/* chat container end  */}
    </div>
  );
};

export default MessagesComponent;
