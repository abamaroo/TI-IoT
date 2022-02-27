import Header from "../components/Header"
import Admin from "../layouts/Admin"
import Dashboard from "./Dashboard"
import About from "./About"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import dashboardRoutes from "../routes"
export default function LandingPage() {

    return(
        <>
            <Header/>
            <BrowserRouter> 
                <Routes>
                        <Route path='admin/dashboard' element={<Dashboard />} />
                        <Route path='/' element={<About />}/>    
                    
                </Routes>
            </BrowserRouter>

            {/* If allowed, show sidebar down here */}
        </>
    )
}