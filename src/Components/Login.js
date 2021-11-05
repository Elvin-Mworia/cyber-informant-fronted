import React,{useContext} from 'react';
import {useHistory,Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import "./styles/login.scss";
import {yupResolver} from "@hookform/resolvers/yup";
import {Logincontext} from './Context/AppContext.js';
import axios from 'axios';

const Schema=yup.object().shape({
    Email:yup.string().email().required("Enter a valid email"),
    Password:yup.string().min(4,"Must be atleast Characters").max(15,"Max Characters is 15").required("Password Required"),
   


});






function Login() {
    const{state,dispatch}=useContext(Logincontext);
   const history=useHistory();
    const {register,handleSubmit,errors}=useForm({resolver:yupResolver(Schema),});
    
const Submit=(data)=>{
//     axios.post("http://localhost:3001/auth/login",data).then(()=>{
// if(res.data.err){
//     console.err(`${err}`);
// }else{
//     sessionStorage.setItem("accessToken",res.data);
    
// };)
dispatch({type:"LOGIN"});
    history.push("/");
    console.log(state);

    }
    


    


    return (
        <div className="login-wrapper">
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit(Submit)}> 
                <input type="email"  name="Email" className="input" placeholder="Email"  /><br/>
                <input type="password" name="Password" className="input" placeholder="Password"   /><br/>
               
              {state.isLoggedIn ? <button className="btn" type="submit" disabled >Login</button> : <button className="btn" type="submit"  onClick={Submit}>Login</button> }
            </form>
           <p>Don't have an account?<Link to="/Register"><span>Register</span></Link></p>
    
           
        </div>
        </div>
    )
}

export default Login;
