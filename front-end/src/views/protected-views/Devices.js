import React from "react";
import {useState, useEffect} from "react"
import Sidebar from "../../components/SideBar";
import axios from 'axios'
import Nav from "react-bootstrap/Nav";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Devices() {


  const [devices, setDevices] = useState([])


  useEffect( () => {
      
    axios.get("http://localhost:8000/Alawfi/api/get-devices/")
    .then( (response) => { response.data.map( (device,index) => 
      {     
      
      setDevices([
                  ...devices,
                  {
                    id: device.id,
                    device_name: device.device_name
                  }
                ])
      } 
    ) })
   
    }, []
  )

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
              {/* TODO display devices list*/}
              {devices.map( (device, key) => { console.log(device.device_name)} )}
          </div>
        </div>

        
    </div>
  );
}

export default Devices;
