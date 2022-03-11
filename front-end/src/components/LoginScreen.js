import React, { useState } from 'react'
import USERS from '../USERS.js'
import { Button } from "@mui/material";

export default function LoginScreen(){ 
    
    {/* this is the value of the dropdown menu*/}
    const [value, setValue] = useState(USERS[0].name);
    {/* this is the user that was selected from the dropdown menue*/}
    const [selectedUser, setSelectedUser] = useState('none');

    {/* when the drop menue option change, change 'value' */}
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    {/* TODO: Make the selected user a global state */}
    const handleLogin = () => {
        setSelectedUser(value)
    }

    return (
        
        <div className="dashboard-container">
          
          <div className="dashboard-content"> 
        
            <div className="dashboard-content-title"> 
            
            </div>

            <div className="dashboard-content-body"> 
              <div>
                <h3> Select a user </h3>
              </div>

              <div> 
                <select value ={value} onChange={handleChange}>
                    {
                        USERS.map((user, key) => {
                            return(
                                <option value = {user.value} key={key}> {user.name} </option>
                            )
                            }
                        )
                    }
                </select>

              </div>
              <div> 
                  <Button 
                  href={value+'/dashboard'}
                  > 
                    Login as {value}
                  </Button>
              </div>

            </div>

        </div>
        
    </div>
    )
}
