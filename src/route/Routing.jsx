import {Routes,Route,Navigate} from "react-router-dom";
import { ProtectedRoute } from './protectRoute/ProtectRoute';

import Home from "../view/Home";
import About from "../view/About";
import Contact from "../view/Contact";
import Java from '../view/subItem/Java';
import Python from '../view/subItem/Python';

const Routing=()=>{
    return(
      <>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Java" element={<Java/>}/>
          <Route path="/Python" element={<Python/>}/>
        </Routes>
        </>
    )
}
export default Routing;