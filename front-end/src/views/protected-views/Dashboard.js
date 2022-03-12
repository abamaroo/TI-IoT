import { React, useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import ReactSpeedometer from "react-d3-speedometer"
import { Button } from "@mui/material";
import axios from 'axios'


function Dashboard({user}) {
    const MAXIMUM_VALUE = 100
    const [current_data, setCurrentData] = useState(0)
    const Increment = () => {
      setCurrentData(current_data+1)
    }
    
    // TODO Test djnago API. Can you get from: 
    //  'http://www.ti-fi-uofsc.com/<user>/api/data' ? 
    //   or 
    //  'localhost:8000'/<user>/api/data
    useEffect( () => {
      
      axios.get("http://localhost:8000/Alawfi/api/get-username/")
      .then( (response) => { console.log(response.data.username)})  
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
