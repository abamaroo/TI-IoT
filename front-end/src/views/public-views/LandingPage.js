import Header from "../../components/Header"
import Dashboard from "../protected-views/Dashboard"
import About from "./About"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Devices from "../protected-views/Devices"
import Contact from "./Contact"
import Documentation from "./Docementation"
import LoginScreen from "../../components/LoginScreen"
import USERS from '../../USERS'

export default function LandingPage() {
    const _pages = ['About', 'Contact', 'Docs'];
    const getRoutes = (pages) => {
        pages.map( (page) => {
            return page
        } )
    };
    return(
        
        <>
        
            <Header/>
            <BrowserRouter> 
            
                <Routes>
                        {USERS.map( (user,key) => {
                            return(
                                <>
                                <Route
                                 path={user.name+'/dashboard'} 
                                 element= {<Dashboard user={user.name}/>} 
                                 key={key}
                                 />
                                 <Route
                                 path={user.name+'/devices'} 
                                 element= {<Devices/>} 
                                 key={key}
                                 />
                                </>
                                 )
                        }) }
                        <Route path='About' element={<About />}/>
                        <Route path='Contact' element={<Contact />}/>
                        <Route path='Documentation' element = {<Documentation />} />
                        <Route path='login' element={<LoginScreen/>} />
                            {/* remove soon */}
                                 <Route
                                 path='admin/dashboard'
                                 element= {<Dashboard/>} 
                                 
                                 />
                                 <Route
                                 path='admin/devices'
                                 element= {<Devices/>} 
                                 
                                 />

                </Routes>
            </BrowserRouter>

        </>
    )
}