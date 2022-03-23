import { React, useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import ReactSpeedometer from "react-d3-speedometer"
import { Button } from "@mui/material";
import axios from 'axios'


function Dashboard({user}) {
    const MAXIMUM_VALUE = 100
    const [current_data, setCurrentData] = useState(0)
    const [current_user, setCurrentUser] = useState('')
    const Increment = () => {
      setCurrentData(current_data+1)
    }
    
    // Collects data about who is currently logged in
    const base_URL = window.location.href
    const base_URL_clear = base_URL.replace("/dashboard", "")
    let last_index_of_slash = base_URL_clear.lastIndexOf("/")
    const current_user_const = (base_URL_clear.substring(last_index_of_slash+1, base_URL_clear.length))
    const [current_device, setDevice] = useState('')

    // fetch the current device 
    useEffect( () => {  
      // at server environemnt, use http://www.ti-fi-uofsc.com/${current_user_const}/api/get-devices/
      axios.get(`http://localhost:8000/${current_user_const}/api/get-devices/`)
      .then( (response) => { 
        setDevice(response.data[0].device_name)
        
      })  
      }
    )

      // Update our data every 5 seconds
    const [seconds, setSeconds] = useState(0)
 useEffect( () => {
                             // The API link now needs to specify which device
                                          
      const interval = window.setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 5000);
      
      // at server env use http://www.ti-fi-uofsc.com/${current_user_const}/api/${current_device}/get-data/`
      axios.get(`http://localhost:8000/${current_user_const}/api/${current_device}/get-data/`)
      .then( (response) => { 
        console.log(response.data.data)
        setCurrentData(response.data.data)
      })  

      return () => clearInterval(interval);

      }
    ) 

  return (
    <div className="dashboard-container">
        <div className="dashboard-sidebar"> 
            <SideBar user= {user}/>
        </div>

        <div className="dashboard-content"> 

          <div className="dashboard-content-title"> 
            <h1> dashboard content </h1>
          </div>
            <div className="dashboard-content-body"> 
              <div>
                <ReactSpeedometer
                      maxValue={MAXIMUM_VALUE}
                      value={current_data > MAXIMUM_VALUE ? MAXIMUM_VALUE : current_data}
                      needleColor="black"
                      startColor="blue"
                      segments={10}
                      endColor="red"
                      textColor="black"
                      width={500}
                    />
              </div>

              <div> 
                <p> current temperature : {current_data} </p>
              </div>
              <div> 
                <Button
                  onClick = {Increment} > 
                    Increment
                  </Button>
              </div>

            </div>

        </div>
        
    </div>
  );
}

export default Dashboard;
