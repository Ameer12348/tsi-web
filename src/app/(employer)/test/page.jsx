import Image from "next/image";

const page = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((el, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-2 rounded-lg bg-white p-4"
            >
              <div className="h-16 w-16 rounded-circle bg-blue-400"></div>
              {/* circle end  */}
              <div className="flex-1">
                <h5 className="text-sm font-medium text-gray-600">Budget</h5>
                <div className="flex items-end gap-1">
                  <p className="text-2xl font-bold">25.09K</p>
                  <p className="font-medium text-orange-700"> +7% </p>
                </div>
                <p className="text-sm text-gray-500">Last Month</p>
              </div>
            </div>
          );
        })}
        <div className="col-span-full overflow-x-auto rounded-lg border-t bg-white p-4 scrollbar-thin">
          <h1 className="mb-4 text-lg font-bold text-gray-800">Applications</h1>
          <table className="mb-4 min-w-full" cellPadding={10}>
            <thead className="border-b">
              <tr>
                <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                  Employee Name
                </th>
                <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                  Date
                </th>
                <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                  Company
                </th>
                <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                  Offer
                </th>
                <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                  Meeting
                </th>

                <th className="whitespace-nowrap text-left text-sm font-medium text-gray-700">
                  Actions
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
                        <h3 className="font-semibold leading-none">Haybusa</h3>
                      </div>
                    </td>
                    {/* employee name email and pic end  */}
                    <td className="whitespace-nowrap text-left text-sm text-gray-500">
                      {new Date().toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}{" "}
                    </td>
                    {/* date end  */}
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
                        <h3 className="text-sm leading-none">Figma</h3>
                      </div>
                    </td>
                    <td className="whitespace-nowrap text-left text-sm text-gray-500">
                      $2500
                    </td>
                    <td className="whitespace-nowrap text-left text-sm text-gray-500">
                      <div className="inline-block rounded bg-blue-100 px-2 py-1 text-center text-blue-600">
                        Sheduled
                      </div>
                    </td>

                    <td className="whitespace-nowrap text-left text-gray-500">
                      <div className="flex items-center gap-3">
                        <button className="items-center rounded-lg border border-blue-900 px-2.5 py-1 text-sm font-medium text-blue-900">
                          <span>View Offer</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-end gap-1 py-2">
            <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
              <span>1</span>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
              <span>2</span>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-gray-500 text-white">
              <span>3</span>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
              <span>...</span>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
              <span>4</span>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
              <span>5</span>
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          {/* pagination buttons end  */}
        </div>
      </div>
    </div>
  );
};

export default page;
