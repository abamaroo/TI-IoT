import React from "react";
import Sidebar from "../components/SideBar";


function Dashboard() {

  return (
    <div className="dashboard-container">
        <div className="dashboard-sidebar"> 
            <Sidebar />
        </div>

        <div className="dashboard-content"> 
            <h1> I am dashboard </h1>
        </div>
        
    </div>
  );
}

export default Dashboard;
