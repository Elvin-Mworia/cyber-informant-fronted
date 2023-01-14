import React,{useContext,useState} from 'react';
import {Link,useHistory} from "react-router-dom";
import {Logincontext} from "./Context/AppContext.js";
import {usercontext} from "./Context/UserContext.js";
import { BiMenu} from "react-icons/bi";



import "./styles/navbar.scss";
function Navbar() {
    const [show,setShow]=useState(false);
    const history=useHistory();
    const{state,dispatch}=useContext(Logincontext);
    const {user,Dispatch}=useContext(usercontext);
    const logout=()=>{
     //   localStorage.removeItem("accessToken");

    }
    return (
        <div className="navbar">
            
                <h1 style={{cursor:"pointer"}} onClick={()=>history.push("/")}>The Cyber <br/> Informant</h1>
                
            
            <nav> 
                <ul>
                   <Link to="/"> <li>Home</li></Link>
                   <Link to="/Vulns"> <li>Vulnerability</li></Link>
                   <Link to="/Malware"> <li>Malware</li></Link>
                   <Link to="/Resources"> <li>Resources</li></Link>
                 {state.isLoggedIn ?  <Link to="/Create" className="create"> <li>Create</li></Link> : ""}
                 { state.isLoggedIn ? <Link to="/" onClick={()=>{dispatch({type:"LOGOUT"}); Dispatch({type:"LOGGED-OUT"});console.log(state); console.log(user); localStorage.removeItem("user")}}><li onclick={logout}>Logout</li> </Link> : <Link to="/Login" > <li>Login</li></Link>}
                 {/* {state.isLoggedIn ?  <Link to="/My-resources" ><a href="/My-resources"><li id="my_resources">Downloads</li></a> </Link> : ""} */}
                   
                    
                </ul>
               
            </nav>
            {
                show ?  <div className="sidebar"> 
              
                <div className="sidebar-nav" >
                <ul>
                <Link to="/"> <a href="/"><li>Home</li></a></Link>
                   <Link to="/Vulns"> <a href="/Vulnerability"><li>Vulnerability</li></a></Link>
                   <Link to="/Malware"><a href="/Malware"><li>Malware</li></a></Link>
                   <Link to="/Resources"> <a href="/Resources"><li>Resources</li></a></Link>
                 {state.isLoggedIn ?  <Link to="/Create" className="create"> <li>Create</li></Link> : ""}
                 { state.isLoggedIn ? <Link to="/" onClick={()=>{dispatch({type:"LOGOUT"}); Dispatch({type:"LOGGED-OUT"});console.log(state); console.log(user); }}><li onclick={logout}>Logout</li> </Link> : <Link to="/Login" > <li>Login</li></Link>}
                
                   
                    
                </ul>
                </div>
                </div>
               
             :""
            }
           

            <BiMenu className="menu" onClick={(e)=>setShow(!show)}/>
           
        </div>
        
    )
}

export default Navbar
