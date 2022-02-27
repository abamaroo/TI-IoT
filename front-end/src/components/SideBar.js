import React from 'react'
import Nav from "react-bootstrap/Nav";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { useLocation, NavLink } from "react-router-dom";
import dashboardRoutes from '../routes.js'

function Sidebar({ color, image}) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
 return(
  <div className="side-bar" >
      <div
        className="side-bar background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className='side-bar wrapper'> 

      <div className="logo d-flex align-items-center justify-content-start">
            <div className="logo-img">
            </div>
            <p> LOGO </p>

        </div>
          <Nav>
            {
              dashboardRoutes.map((prop, key) => {
                  return (
                    <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    key={key}
                  >
                    <li
                    className={ activeRoute(prop.layout + prop.path)}
                  >
                      <NavLink
                        to={prop.layout + prop.path}
                        className="nav-link"
                        activeclassname="active"
                      >
                        <i className={prop.icon} />
                        <p>{prop.name}</p>
                      </NavLink>
                    </li>
                    </Grid>
                  );
              })
            }
          </Nav>
      </div>

  </div>
 );
}

export default Sidebar;
