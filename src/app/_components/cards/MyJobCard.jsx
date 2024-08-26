import React from "react";

const MyJobCard = () => {
  return (
    <div className="max-w-[900px] rounded-lg border bg-white p-6">
      <h5 className="mb-3 text-xl font-semibold text-gray-600">
        Senior Backend Developer
      </h5>
      <div className="mb-3 flex items-center gap-2">
        <i className="fa-solid fa-circle text-[10px] text-green-500"></i>
        <span className="me-3 font-medium text-green-500">Active Search</span>
        <span className="text-sm font-medium text-gray-600">1 min ago</span>
      </div>
      <p className="mb-4 text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        minus, eligendi, corrupti obcaecati quaerat quos veniam, sit
        reprehenderit aliquid dolore quisquam eius tenetur sapiente voluptate
        voluptas? Itaque blanditiis optio natus? Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Consequatur voluptatibus dolorem minus,
        itaque ratione officiis porro labore architecto aliquid laboriosam quod
        magnam optio eligendi sit praesentium inventore ea, tempore repudiandae
        <span className="ms-2 text-blue-700">
          <span className="me-1">...</span>
          <span className="underline">Read more</span>
        </span>
      </p>
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        <p className="text-sm font-medium">25,00 {"$"}</p>
        <p className="text-sm text-gray-500">Pakistan{","}Karachi</p>
        <p className="text-sm text-gray-500">2 year of Experience</p>
      </div>
    </div>
  );
};

export default MyJobCard;
