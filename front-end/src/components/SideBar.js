import React from 'react'
import Nav from "react-bootstrap/Nav";
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

    {console.log(dashboardRoutes)}

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
                  <li
                  className={ activeRoute(prop.layout + prop.path)}
                  key={key}
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
                );
            })
          }
        </Nav>

      </div>

  </div>
 );
}

export default Sidebar;
