import Dashboard from "./views/Dashboard";

const dashboardRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "nc-icon nc-chart-pie-35",
      component: Dashboard,
      layout: "/admin",
    },
    {
      path: "/user",
      name: "User Profile",
      icon: "nc-icon nc-circle-09",

      layout: "/admin",
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: "nc-icon nc-bell-55",

      layout: "/admin",
    },
  ];
  
  export default dashboardRoutes;