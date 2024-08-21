import DashboardSideBarNavigation from "@/app/_components/sidebar/DashboardSideBarNavigation";

const page = ({ children }) => {
  const navigationList = [
    { name: "Dashboard", icon: "fa-solid fa-chart-line", link: "/dashboard" },
    {
      name: "Employee List",
      icon: "fa-solid fa-user-group",
      link: "/employees-list",
    },
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
    { name: "My Jobs", icon: "fa-solid fa-briefcase", link: "/my-jobs" },
    { name: "Post a Job", icon: "fa-solid fa-plus", link: "#" },
    { name: "Saved Employee", icon: "fa-regular fa-bookmark", link: "#" },
    { name: "Plan & Billing", icon: "fa-solid fa-file-invoice", link: "#" },
    { name: "Messages", icon: "fa-regular fa-comment-dots", link: "/messages" },
    { name: "Verify Account", icon: "fa-solid fa-check", link: "#" },
    { name: "Settings", icon: "fa-solid fa-gear", link: "/settings" },
    { name: "Logout", icon: "fa-solid fa-arrow-right-from-bracket", link: "#" },
  ];
  return (
    <DashboardSideBarNavigation
      children={children}
      navigationList={navigationList}
    />
  );
};

export default page;
