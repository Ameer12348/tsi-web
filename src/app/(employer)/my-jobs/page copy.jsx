import { Switch } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const emailVerificationList = ["Verified", "Not Verified"];
const sortByList = ["oldest", "newest"];

const page = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg ">
        <div className=" p-4  border-b">
          <div>
            <h1 className="text-lg font-medium">Applied Jobs</h1>
          </div>
        </div>
        {/* employee list heading and create button container  end  */}
        <div className=" p-4 grid  grid-cols-3 gap-2  ">
          <div>
            <h3 className="mb-2 font-medium">Search</h3>
            <input
              type="text"
              className="w-full outline-0 border p-2 rounded"
              placeholder="Search"
            />
          </div>
          {/* seach end  */}

          <div className="overflow-x-auto scrollbar-thin col-span-full border-t">
            <table className="min-w-full " cellPadding={10}>
              <thead className="border-b">
                <tr>
                  <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                    Employer
                  </th>
                  <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                    Role/Position
                  </th>
                  <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                    Job{" "}
                  </th>
                  <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                    Cover Letter{" "}
                  </th>

                  <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                    Joined Date
                  </th>
                  <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                    Actions{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="flex gap-2 items-center">
                          <figure className="w-10 h-10">
                            <Image
                              className="object-cover  rounded-circle aspect-square"
                              src={
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
                              }
                              alt=""
                              width={100}
                              height={100}
                            />
                          </figure>
                          <div className="flex-1 flex flex-col justify-center text-base font-medium   py-0.5">
                            <h3 className="font-semibold  leading-none">
                              Haybusa
                            </h3>
                            <h4 className="text-[12px] text-gray-500 font-medium ">
                              email@example.com
                            </h4>
                          </div>
                        </div>
                      </td>
                      {/* employee name email and pic end  */}
                      <td className="text-left font-medium  text-blue-900 whitespace-nowrap">
                        Manager{" "}
                      </td>
                      <td className="text-left  text-sm  text-gray-500 whitespace-nowrap">
                        Frontend Developer
                      </td>
                      <td className="text-left  text-sm  text-gray-500 whitespace-nowrap">
                        Lorem ipsum dolor sit amet.....{" "}
                      </td>

                      <td className="text-left  text-sm  text-gray-500 whitespace-nowrap">
                        {new Date().toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}{" "}
                      </td>
                      <td className="text-left   text-gray-500 whitespace-nowrap">
                        <div className="flex gap-3 items-center">
                          <button className="text-blue-900 font-bold  items-center">
                            <span>View Profile</span>
                            <i className="fa-solid fa-angle-right ms-1"></i>
                          </button>
                          {/* view profile button end  */}
                          <button className="text-xl text-gray-500 ">
                            <i className="fa-solid fa-pen-to-square "></i>
                          </button>
                          {/* edit button end  */}
                          <button className="text-xl text-red-500 ">
                            <i className="fa-regular fa-trash-can"></i>
                          </button>
                          {/* delete button end */}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
