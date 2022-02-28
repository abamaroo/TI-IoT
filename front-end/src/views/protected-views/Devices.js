import React from "react";
import Sidebar from "../../components/SideBar";


function Devices() {

  return (
    <div className="dashboard-container">
        <div className="dashboard-sidebar"> 
            <Sidebar />
        </div>
        <div className="dashboard-content"> 
          <div className="dashboard-content-title"> 
              <h1> Devices content </h1>
          </div>
          <div className="dashboard-content-body-devices"> 
              <h3> Registered boards </h3>
              <li> None  </li>
          </div>
        </div>

        
    </div>
  );
}

export default Devices;
