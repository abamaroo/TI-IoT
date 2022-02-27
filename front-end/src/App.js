// React stuff
import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";

// CSS
import './assets/css/App.css';

//Components
import Sidebar from './components/SideBar';
import Dashboard from "./views/Dashboard";
import sidebarImage from './assets/imgs/sidebar-4.jpg'

// Routes
import dashboardRoutes from "./routes";

function App() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
        <div className='wrapper'>
          <Sidebar color={color} image={image} />
        </div>
        
        <div className="content">
            <Routes>{getRoutes(dashboardRoutes)}</Routes>
          </div>
    </>
  );
}

export default App;
