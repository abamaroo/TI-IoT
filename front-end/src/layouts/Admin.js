// React stuff
import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";

// Assets
import '../assets/css/App.css';
import sidebarImage from '../assets/imgs/sidebar-4.jpg';

//Components
import Sidebar from '../components/SideBar';

// Routes
import dashboardRoutes from "../routes";

function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");

  return (
    <>
        <div className='w Adminer'>
          <Sidebar color={color} image={image} />
        </div>
        
        <div className="content">
        </div>
    </>
  );
}

export default Admin;
