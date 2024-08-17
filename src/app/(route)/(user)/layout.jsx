import NavigationList from "@/app/_components/lists/NavigationList";
import React from "react";

const page = ({ children }) => {
  const navigationList = [
    { name: "Dashboard", icon: "fa-solid fa-chart-line", link: "/dashboard" },
    { name: "Employee List", icon: "fa-solid fa-user-group", link: "#" },
    {
      name: "Employee Tracker",
      icon: "fa-regular fa-hourglass-half",
      link: "#",
    },
    {
      name: "Employee Scheduled",
      icon: "fa-solid fa-clipboard-list",
      link: "#",
    },
    { name: "Employee Calender", icon: "fa-solid fa-calendar-days", link: "#" },
    { name: "Authorize Manager", icon: "fa-solid fa-shield-halved", link: "#" },
    { name: "My Profile", icon: "fa-regular fa-user", link: "#" },
    { name: "My Jobs", icon: "fa-solid fa-briefcase", link: "#" },
    { name: "Post a Job", icon: "fa-solid fa-plus", link: "#" },
    { name: "Saved Employee", icon: "fa-regular fa-bookmark", link: "#" },
    { name: "Plan & Billing", icon: "fa-solid fa-file-invoice", link: "#" },
    { name: "Messages", icon: "fa-regular fa-comment-dots", link: "/messages" },
    { name: "Verify Account", icon: "fa-solid fa-check", link: "#" },
    { name: "Settings", icon: "fa-solid fa-gear", link: "#" },
    { name: "Logout", icon: "fa-solid fa-arrow-right-from-bracket", link: "#" },
  ];
  return (
    <div className="flex  bg-[#f3f3f3]">
      <div className="w-[300px]  p-4 h-screen bg-white scrollbar-thin scrollbar-thumb-gray-300  scrollbar-track-transparent  overflow-y-scroll">
        <h3 className="px-1.5  text-gray-800 font-medium mb-2 text-lg">Menu</h3>
        <ul>
          {navigationList.map((ele, index) => {
            return <NavigationList key={index} ele={ele} />;
          })}
        </ul>
      </div>
      <div className="flex-1 h-screen">{children}</div>
    </div>
  );
};

export default page;
