import {Routes,Route,Navigate} from "react-router-dom";
// import { ProtectedRoute } from './protectRoute/ProtectRoute';
import { ProtectedRoute } from './protectRoute/ProtectRoute';

import Dashboard from "../view/Dashboard";
import About from "../view/About";
import Contact from "../view/Contact";
const Routing=()=>{
    return(
      <>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>           
        </Routes>
        </>
    )
}
export default Routing;