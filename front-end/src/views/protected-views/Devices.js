import React from "react";
import Sidebar from "../../components/SideBar";


function Devices() {

  return (
    <div className="Devices-container">
        <div className="Devices-sidebar"> 
            <Sidebar />
        </div>

        <div className="Devices-content"> 
            <h1> Devices content </h1>
        </div>
        
    </div>
  );
}

export default Devices;
