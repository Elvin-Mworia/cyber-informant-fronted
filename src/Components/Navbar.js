import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import {Logincontext} from "./Context/AppContext.js";



import "./styles/navbar.scss";
function Navbar() {
    const{state,dispatch}=useContext(Logincontext);
    const logout=()=>{
     //   localStorage.removeItem("accessToken");

    }
    return (
        <div className="navbar">
            
                <h1>The Cyber <br/> Informant</h1>
            
            <nav> 
                <ul>
                   <Link to="/"> <li>Home</li></Link>
                   <Link to="/Vulns"> <li>Vulnerability</li></Link>
                   <Link to="/Malware"> <li>Malware</li></Link>
                   <Link to="/Resources"> <li>Resources</li></Link>
                 {state.isLoggedIn ?  <Link to="/Create Post" className="create"> <li>Create</li></Link> : ""}
                 { state.isLoggedIn ? <Link to="/" onClick={()=>{dispatch({type:"LOGOUT"}); console.log(state); }}><li onclick={logout}>Logout</li> </Link> : <Link to="/Login"> <li>Login</li></Link>}
                   
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
