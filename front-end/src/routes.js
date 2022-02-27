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
      path: "/Devices",
      name: "Notifications",
      icon: "nc-icon nc-bell-55",
      component: 'sss',
      layout: "/admin",
    },
    {
      path: "/Something else",
      name: "User Profile",
      icon: "nc-icon nc-circle-09",
      component:'sss',
      layout: "/admin",
    },
  ];
  
  export default dashboardRoutes;