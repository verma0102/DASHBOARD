import {Routes,Route,Navigate} from "react-router-dom";
import { ProtectedRoute } from './protectRoute/ProtectRoute';

import Home from "../view/Home";
import About from "../view/About";
import Contact from "../view/Contact";
import Demo from '../view/subItem/Demo';
import Visitor from '../view/subItem/Visitor';

const Routing=()=>{
    return(
      <>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Demo" element={<Demo/>}/>
          <Route path="/Visitor" element={<Visitor/>}/>
        </Routes>
        </>
    )
}
export default Routing;