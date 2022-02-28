import Header from "../../components/Header"
import Dashboard from "../protected-views/Dashboard"
import About from "./About"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Devices from "../protected-views/Devices"
import Contact from "./Contact"
import Documentation from "./Docementation"


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
                        <Route path='admin/Dashboard' element={<Dashboard />} />
                        <Route path='admin/Devices' element={<Devices />} />
                        <Route path='About' element={<About />}/>
                        <Route path='Contact' element={<Contact />}/>
                        <Route path='Documentation' element = {<Documentation />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}