import React, { useState } from 'react'
import USERS from '../USERS.js'
import { Button } from "@mui/material";

export default function LoginScreen(){ 
    
    const [value, setValue] = useState(USERS[0].name);
    const [selectedUser, setSelectedUser] = useState('none')

    const handleChange = (event) => {
        setValue(event.target.value);
        
      };

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
