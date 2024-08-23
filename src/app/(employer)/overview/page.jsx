import React from "react";

const page = () => {
  return (
    <div className="p-4">
      <div className="rounded-lg bg-white p-4">
        <div className="mb-4">
          <h1 className="mb-3 text-2xl font-medium text-gray-900">My Jobs</h1>
          <p className="text-sm text-gray-700">
            Here are your daily activities & career opportunities
          </p>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex items-center justify-between rounded bg-blue-100 p-5">
            <div className="flex flex-col gap-1">
              <h6 className="text-3xl font-medium">3</h6>
              <p className="text-[12px] text-gray-600">Open Job</p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded bg-white text-3xl text-blue-500">
              <i class="fa-solid fa-briefcase"></i>
            </div>
          </div>
          {/* open job end  */}
          <div className="flex items-center justify-between rounded bg-orange-100 p-5">
            <div className="flex flex-col gap-1">
              <h6 className="text-3xl font-medium">0</h6>
              <p className="text-[12px] text-gray-600">Saved Employee</p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded bg-white text-3xl text-orange-500">
              <i class="fa-regular fa-address-card"></i>
            </div>
          </div>
          {/* saved employee end  */}
          <div className="flex items-center justify-between rounded bg-green-100 p-5">
            <div className="flex flex-col gap-1">
              <h6 className="text-3xl font-medium">0</h6>
              <p className="text-[12px] text-gray-600">Pending Jobs</p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded bg-white text-3xl text-orange-500">
              <i class="fa-solid fa-clock"></i>
            </div>
          </div>
          {/* pending jobs end  */}
        </div>
        {/* job details cards end  */}
        <div className="mb-4 rounded border border-gray-200 p-5">
          <h3 className="mb-4 text-lg font-medium text-gray-700">
            Pricing Plan - Feature Remaining
          </h3>
          <div className="mb-4 grid grid-cols-4 gap-3 max-sm:grid-cols-2">
            <div className="flex flex-col items-start justify-center gap-1 ps-2">
              <p className="flex items-end justify-start gap-2 text-2xl">
                <span className="text-lg text-green-500">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-medium">12</span>
              </p>
              <p className="text-sm text-gray-600">Active Jobs</p>
            </div>
            {/* active jobs end  */}
            <div className="flex flex-col items-start justify-center gap-1 ps-2">
              <p className="flex items-end justify-start gap-2 text-2xl">
                <span className="text-lg text-red-500">
                  <i class="fa-solid fa-bolt"></i>
                </span>
                <span className="font-medium">0</span>
              </p>
              <p className="text-sm text-gray-600">Highlight Jobs</p>
            </div>
            {/* Highlight Jobs end  */}
            <div className="flex flex-col items-start justify-center gap-1 ps-2">
              <p className="flex items-end justify-start gap-2 text-2xl">
                <span className="text-lg text-blue-500">
                  <i class="fa-solid fa-circle-arrow-up"></i>
                </span>
                <span className="font-medium">0</span>
              </p>
              <p className="text-sm text-gray-600">Featured Jobs</p>
            </div>
            {/* Featured Jobs end  */}
            <div className="flex flex-col items-start justify-center gap-1 ps-2">
              <p className="flex items-end justify-start gap-2 text-2xl">
                <span className="text-lg text-blue-500">
                  <i class="fa-solid fa-user-group"></i>
                </span>
                <span className="font-medium">0</span>
              </p>
              <p className="text-sm text-gray-600">Profile View</p>
            </div>
            {/* Profile View end  */}
          </div>
          <div>
            <button className="font-medium text-blue-800">Upgrade Plan</button>
          </div>
        </div>
        {/* Pricing Plan - Feature Remaining container end  */}
        <div className="mb-4 flex items-center justify-between">
          <h6 className="text-lg font-medium text-gray-600">Recent Jobs</h6>
          <button className="flex items-center gap-2 text-sm font-medium text-blue-600">
            <span>View All</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        {/* recent jobs end */}
        <div className="mb-4 w-full overflow-x-hidden">
          <table className="mx-auto w-full max-w-[1200px]" cellPadding={15}>
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left text-sm text-gray-500">Job </th>
                <th className="text-left text-sm text-gray-500">Status</th>
                <th className="text-left text-sm text-gray-500">
                  Applications
                </th>
                <th className="text-left text-sm text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((ele, index) => (
                <tr
                  className="group rounded duration-300 hover:border hover:border-blue-500"
                  key={index}
                >
                  <td>
                    <h6 className="text-lg font-medium text-gray-800">
                      React Developer
                    </h6>
                    <p className="flex items-center gap-3 text-sm font-medium text-gray-500">
                      <span>Full Time</span>
                      <span>4d 12h Remaining</span>
                    </p>
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <i class="fa-regular fa-circle-check text-lg"></i>
                      <span>Active</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <i class="fa-regular fa-address-card text-lg"></i>
                      <span>Active</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-4">
                      <button className="rounded bg-blue-50 px-4 py-2 text-lg font-medium text-blue-700 duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        View Application
                      </button>
                      <button className="px-2 text-2xl text-gray-700">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
