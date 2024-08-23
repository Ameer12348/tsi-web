import Image from "next/image";

const page = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((el, index) => {
          return (
            <div
              key={index}
              className="p-4 bg-white rounded-lg flex items-center gap-2"
            >
              <div className="bg-blue-400 rounded-circle w-16 h-16"></div>
              {/* circle end  */}
              <div className="flex-1">
                <h5 className="text-gray-600 font-medium text-sm">Budget</h5>
                <div className="flex  gap-1 items-end">
                  <p className="text-2xl font-bold">25.09K</p>
                  <p className="text-orange-700 font-medium"> +7% </p>
                </div>
                <p className="text-gray-500 text-sm">Last Month</p>
              </div>
            </div>
          );
        })}
        <div className="overflow-x-auto border-t bg-white rounded-lg scrollbar-thin p-4 col-span-full">
          <h1 className="text-lg font-bold text-gray-800 mb-4">Applications</h1>
          <table className="min-w-full " cellPadding={10}>
            <thead className="border-b">
              <tr>
                <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                  Employee Name
                </th>
                <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                  Date
                </th>
                <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                  Company
                </th>
                <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                  Offer
                </th>
                <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                  Meeting
                </th>

                <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                  Actions
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
                        <h3 className="font-semibold  leading-none">Haybusa</h3>
                      </div>
                    </td>
                    {/* employee name email and pic end  */}
                    <td className="text-left  text-sm  text-gray-500 whitespace-nowrap">
                      {new Date().toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}{" "}
                    </td>
                    {/* date end  */}
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
                        <h3 className=" text-sm leading-none">Figma</h3>
                      </div>
                    </td>
                    <td className="text-left  text-sm  text-gray-500 whitespace-nowrap">
                      $2500
                    </td>
                    <td className="text-left  text-sm  text-gray-500 whitespace-nowrap">
                      <div className="bg-blue-100 text-blue-600 text-center inline-block px-2 py-1 rounded">
                        Sheduled
                      </div>
                    </td>

                    <td className="text-left   text-gray-500 whitespace-nowrap">
                      <div className="flex gap-3 items-center">
                        <button className="text-blue-900 border text-sm border-blue-900 px-2.5 rounded-lg py-1  font-medium  items-center">
                          <span>View Offer</span>
                        </button>
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
  );
};

export default page;
