import Image from "next/image";

import DashboardLineGraph from "@/app/_components/graph/DashboardLineGraph";

const page = () => {
  return (
    <div className=" p-4 gap-2 flex h-full overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-300  scrollbar-track-transparent">
      <div className="  rounded-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Good Morning, John</h2>
          <div className="flex gap-2 items-center">
            <div className="flex-1 flex flex-col justify-between text-lg font-medium  py-0.5">
              John Smith
              <h3 className="font-semibold text-right"></h3>
              <h4 className="text-sm text-gray-700 font-medium text-right">
                Lead HR
              </h4>
            </div>
            <figure>
              <Image
                className="object-cover w-12 h-12 rounded-circle aspect-square"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
                }
                alt=""
                width={100}
                height={100}
              />
            </figure>
          </div>
        </div>
        {/* user view and greeting end  */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white  p-4 rounded-lg">
            <h4
              className={`flex gap-2 items-center py-1 text-sm   text-gray-500 mb-4`}
            >
              <i className="fa-solid fa-user-group"></i>
              {/* <div className="h-5 w-5 bg-gray-500 rounded-[50%] "></div> */}
              <span>Total Employees</span>
            </h4>
            <p className="flex justify-between items-end text-sm">
              <span className="text-2xl text-black font-medium">418</span>
              <span>
                <span className="text-orange-700 font-medium"> +7% </span>
                <span className="text-gray-500">Last Month</span>
              </span>
            </p>
          </div>
          {/* total employees card end  */}
          <div className="bg-white  p-4 rounded-lg">
            <h4
              className={`flex gap-2 items-center py-1 text-sm   text-gray-500 mb-4`}
            >
              <i className="fa-solid fa-user-group"></i>
              {/* <div className="h-5 w-5 bg-gray-500 rounded-[50%] "></div> */}
              <span>New Employees</span>
            </h4>
            <p className="flex justify-between items-end text-sm">
              <span className="text-2xl text-black font-medium">21</span>
              <span>
                <span className="text-orange-700 font-medium"> +2% </span>
                <span className="text-gray-500">Last Month</span>
              </span>
            </p>
          </div>
          {/* new employees card end  */}
          <div className="bg-white  p-4 rounded-lg">
            <h4
              className={`flex gap-2 items-center py-1 text-sm   text-gray-500 mb-4`}
            >
              <i className="fa-solid fa-user-group"></i>
              {/* <div className="h-5 w-5 bg-gray-500 rounded-[50%] "></div> */}
              <span>Resigned Employees</span>
            </h4>
            <p className="flex justify-between items-end text-sm">
              <span className="text-2xl text-black font-medium">14</span>
              <span>
                <span className="text-orange-700 font-medium"> +4% </span>
                <span className="text-gray-500">Last Month</span>
              </span>
            </p>
          </div>
          {/* resigned employees card end  */}
          <div className="bg-white  p-4 rounded-lg">
            <h4
              className={`flex gap-2 items-center py-1 text-sm   text-gray-500 mb-4`}
            >
              <i className="fa-solid fa-user-group"></i>
              {/* <div className="h-5 w-5 bg-gray-500 rounded-[50%] "></div> */}
              <span>Job Applicants</span>
            </h4>
            <p className="flex justify-between items-end text-sm">
              <span className="text-2xl text-black font-medium">261</span>
              <span>
                <span className="text-orange-700 font-medium"> +12% </span>
                <span className="text-gray-500">Last Month</span>
              </span>
            </p>
          </div>
          {/* job applicants card end  */}
          <div className="bg-white p-4 rounded-lg  col-span-full">
            <h3 className="text-xl text-black font-medium mb-6">
              Upcoming Interview
            </h3>
            {/* Upcoming heading end  */}
            <div className="flex justify-between items-end">
              <div className="flex gap-2 items-center">
                <figure>
                  <Image
                    className="object-cover w-12 h-12 rounded-circle aspect-square"
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
                    }
                    alt=""
                    width={100}
                    height={100}
                  />
                </figure>
                <div className="flex-1 flex flex-col justify-center text-base font-medium  py-0.5">
                  <h3 className="font-semibold "> Haybusa</h3>
                  <h4 className="text-[12px] text-gray-700 font-medium ">
                    Front End Developer
                  </h4>
                </div>
              </div>
              {/* profie view end  */}
              <div>
                <h5 className="text-gray-600 flex flex-col">
                  <span>Company</span>
                  <span className="text-black font-medium">Google</span>
                </h5>
              </div>
              {/* Company */}
              <div>
                <h5 className="text-gray-600 flex flex-col">
                  <span>Time</span>
                  <span className="text-black font-medium"> 12:30 - 01:30</span>
                </h5>
              </div>
              {/* timings end  */}
              <div className="flex gap-4">
                <button className="py-1 px-2 border border-gray-300 rounded-lg">
                  View details
                </button>
                <button className="py-1 px-2  rounded-lg bg-[#51b206] text-white">
                  <i className="fa-solid fa-phone"></i>
                </button>
              </div>
              {/* call end view details end  */}
            </div>
          </div>
          {/* upcoming intervie info end  */}
          <div className="p-4 bg-white rounded-lg col-span-full">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl text-black font-medium ">
                Vacancy Trends
              </h3>
              <div className="flex gap-3">
                <h5 className="text-gray-700 flex items-center gap-2">
                  <i className="fa-solid fa-circle  text-[8px] text-green-500"></i>
                  <span>Vacancies</span>
                </h5>
                <h5 className="text-gray-700 flex items-center gap-2">
                  <i className="fa-solid fa-circle  text-[8px] text-green-500"></i>
                  <span>Candidates</span>
                </h5>
              </div>
            </div>
            {/* Vacancy trends container end  */}
            <div>
              <DashboardLineGraph />
            </div>
          </div>
          {/* dashboard line graph end  */}
          <div className="bg-white p-4 rounded-lg  col-span-full mb-5">
            <h3 className="text-xl text-black font-medium mb-6">
              Upcoming Interview
            </h3>
            {/*   employees info end  end  */}
            <div className="overflow-x-auto scrollbar-thin">
              <table className="min-w-full " cellPadding={7}>
                <thead>
                  <tr>
                    <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                      Employee Name
                    </th>
                    <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                      Employee Id
                    </th>
                    <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                      Employee Email
                    </th>
                    <th className="text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                      Employee Job
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
                            <div className="flex-1 flex flex-col justify-center text-base font-medium  py-0.5">
                              <h3 className="font-semibold text-gray-700 text-sm whitespace-nowrap">
                                Haybusa
                              </h3>
                            </div>
                          </div>
                        </td>
                        <td className="text-left text-sm font-medium  text-gray-700 whitespace-nowrap">
                          #e422
                        </td>
                        <td className="text-left text-sm font-medium  text-gray-700 whitespace-nowrap">
                          example@gmail.com
                        </td>
                        <td className="text-left text-sm font-medium  text-gray-700 whitespace-nowrap">
                          Front End Developer
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* employees info end  */}
        </div>
      </div>
    </div>
  );
};

export default page;
