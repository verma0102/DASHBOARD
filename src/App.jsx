import Login from "./view/Login";
import './view/Style.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import MenuNavigation from './navigation/MenuNavigation';

const App=()=>{
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="*" name="/Dashboard" element={<MenuNavigation/>}/>
        </Routes>    
    </BrowserRouter>
  )
}
export default App;