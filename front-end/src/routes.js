import Dashboard from "./views/protected-views/Dashboard";
import Devices from './views/protected-views/Devices';
import USERS from './USERS.js'


const dashboardRoutes = [
  
    {
      path: "dashboard",
      name: "Dashboard",
      icon: "nc-icon nc-chart-pie-35",
      component: Dashboard,
      layout: "/admin",
    },
    {
      path: "devices",
      name: "Devices",
      icon: "nc-icon nc-bell-55",
      component: Devices,
      layout: "/admin",
    },
    {
      path: "something else",
      name: "Something ? ",
      icon: "nc-icon nc-circle-09",
      component:'sss',
      layout: "/admin",
    },
  ];
  
  export default dashboardRoutes;