import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Podcasts from "./Pages/Podcasts";
import Header from "./components/Header";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/podcasts" element={<Podcasts/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;