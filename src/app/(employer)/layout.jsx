import DashboardSideBarNavigation from "@/app/_components/sidebar/DashboardSideBarNavigation";

const page = ({ children }) => {
  const navigationList = [
    { name: "Overview", icon: "fa-solid fa-table-columns", link: "/overview" },
    { name: "Dashboard", icon: "fa-solid fa-chart-line", link: "/dashboard" },
    {
      name: "Employee List",
      icon: "fa-solid fa-user-group",
      link: "/employees-list",
    },
    {
      name: "Employee Tracker",
      icon: "fa-regular fa-hourglass-half",
      link: "/employee-tracker",
    },
    {
      name: "Employee Scheduled",
      icon: "fa-solid fa-clipboard-list",
      link: "#",
    },
    {
      name: "Employee Calender",
      icon: "fa-solid fa-calendar-days",
      link: "/employee-calender",
    },
    {
      name: "Authorize Manager",
      icon: "fa-solid fa-shield-halved",
      link: "/authorize-manager",
    },
    { name: "My Profile", icon: "fa-regular fa-user", link: "#" },
    { name: "My Jobs", icon: "fa-solid fa-briefcase", link: "/my-jobs" },
    { name: "Post a Job", icon: "fa-solid fa-plus", link: "/post-a-job" },
    {
      name: "Saved Employee",
      icon: "fa-regular fa-bookmark",
      link: "/saved-employee",
    },
    {
      name: "Plan & Billing",
      icon: "fa-solid fa-file-invoice",
      link: "/plan-&-billings",
    },
    { name: "Messages", icon: "fa-regular fa-comment-dots", link: "/messages" },
    {
      name: "Verify Account",
      icon: "fa-solid fa-check",
      link: "/verify-account",
    },
    { name: "Settings", icon: "fa-solid fa-gear", link: "/settings" },
    { name: "Logout", icon: "fa-solid fa-arrow-right-from-bracket", link: "#" },
  ];
  return (
    <DashboardSideBarNavigation navigationList={navigationList}>
      {children}
    </DashboardSideBarNavigation>
  );
};

export default page;
