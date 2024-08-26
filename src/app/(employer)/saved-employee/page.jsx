import { Switch } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const emailVerificationList = ["Verified", "Not Verified"];
const sortByList = ["oldest", "newest"];
const page = () => {
  return (
    <div className="p-4">
      <div className="rounded-lg bg-white">
        <div className="flex justify-between border-b p-4">
          <div>
            <h1 className="text-lg font-medium">Saved Employee</h1>
          </div>
        </div>
        {/* employee list heading and create button container  end  */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-4 p-4 max-md:grid-cols-1">
          <div>
            <h3 className="mb-2 font-medium">Search</h3>
            <input
              type="text"
              className="w-full rounded border p-2 outline-0"
              placeholder="Search"
            />
          </div>
          {/* seach end  */}
          <div>
            <h3 className="mb-2 font-medium">Email Verifcation</h3>
            <select className="w-full rounded border p-2 outline-0">
              {emailVerificationList.map((ele, index) => (
                <option key={index} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </div>
          {/* email verification end  */}
          <div>
            <h3 className="mb-2 font-medium">Sort By</h3>
            <select className="w-full rounded border p-2 outline-0">
              {sortByList.map((ele, index) => (
                <option key={index} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </div>
          {/* sort by end  */}
          <div className="col-span-full overflow-x-auto border-t scrollbar-thin">
            <table className="min-w-full" cellPadding={10}>
              <thead className="border-b">
                <tr>
                  <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                    Employee Name
                  </th>
                  <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                    Role/Position
                  </th>
                  <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                    Applied Jobs
                  </th>
                  <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                    Account Status
                  </th>
                  <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                    Email Verication
                  </th>
                  <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                    Joined Date
                  </th>
                  <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                    Actions{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="flex items-center gap-2">
                          <figure className="h-10 w-10">
                            <Image
                              className="aspect-square rounded-circle object-cover"
                              src={
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
                              }
                              alt=""
                              width={100}
                              height={100}
                            />
                          </figure>
                          <div className="flex flex-1 flex-col justify-center py-0.5 text-base font-medium">
                            <h3 className="font-semibold leading-none">
                              Haybusa
                            </h3>
                            <h4 className="text-[12px] font-medium text-gray-500">
                              email@example.com
                            </h4>
                          </div>
                        </div>
                      </td>
                      {/* employee name email and pic end  */}
                      <td className="whitespace-nowrap text-left font-medium text-blue-900">
                        Manger{" "}
                      </td>
                      <td className="whitespace-nowrap text-left text-sm text-gray-500">
                        {Math.round(Math.random() * (5 - 1) + 1)} Applied Jobs
                      </td>
                      <td className="whitespace-nowrap text-left text-sm text-gray-500">
                        <label className="flex items-center gap-2">
                          <Switch size="small" color="secondary" />
                          <span className="peer-checked:text-blue-500">
                            Activated
                          </span>
                        </label>
                      </td>
                      <td className="whitespace-nowrap text-left text-sm text-gray-500">
                        <label className="flex items-center gap-2">
                          <Switch size="small" color="secondary" />
                          <span className="peer-checked:text-blue-500">
                            Verified
                          </span>
                        </label>
                      </td>
                      <td className="whitespace-nowrap text-left text-sm text-gray-500">
                        {new Date().toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}{" "}
                      </td>
                      <td className="whitespace-nowrap text-left text-gray-500">
                        <div className="flex items-center gap-3">
                          <button className="items-center font-bold text-blue-900">
                            <span>View Profile</span>
                            <i className="fa-solid fa-angle-right ms-1"></i>
                          </button>
                          {/* view profile button end  */}
                          <button className="text-xl text-gray-500">
                            <i className="fa-solid fa-pen-to-square"></i>
                          </button>
                          {/* edit button end  */}
                          <button className="text-xl text-red-500">
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
          {/* table container end  */}
        </div>
      </div>
    </div>
  );
};

export default page;
