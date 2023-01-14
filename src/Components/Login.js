import React,{useEffect,useContext,useState} from 'react';
import {useHistory,Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import "./styles/login.scss";
import {yupResolver} from "@hookform/resolvers/yup";
import {Logincontext} from './Context/AppContext.js';
import axios from 'axios';
import {usercontext} from './Context/UserContext.js';
import {motion} from "framer-motion";
import { animeVar,transitions } from './animationVariants';


const Schema=yup.object().shape({
    Email:yup.string().email().required("Enter a valid email"),
    Password:yup.string().min(4,"Must be atleast Characters").max(15,"Max Characters is 15").required("Password Required"),
   


});






function Login() {
    const{state,dispatch}=useContext(Logincontext);
    const{user,Dispatch}=useContext(usercontext);
    const [email,setEmail]=useState('');
    
    const [password,setPassword]=useState('');
   const history=useHistory();
    const {register,handleSubmit,errors}=useForm({resolver:yupResolver(Schema),});
    
const Submit=(e)=>{
    const payload={email:email,password:password};
    
   // const useremail=JSON.stringify({useremail:data.email});
    axios.post("http://localhost:3001/auth/login",payload).then((res)=>{

        
        if(res.data.status===301){
            history.push("/login");

        }
       
    //    Dispatch({type:"LOGGED-IN",payload:username});
    //    dispatch({type:"LOGIN"});
       
    //          history.push("/"); 
    //           console.log(state)
    //           console.log(user);
     
    //           console.log(res);
        // eslint-disable-next-line eqeqeq
        if(res.data.status===200){
            
                 sessionStorage.setItem("accessToken",res.data.accessToken);
              const  username=res.data.username;
                 console.log(username);
                 localStorage.setItem("username",username);
                
                console.log(res.data.accessToken);
                Dispatch({type:"LOGGED-IN",payload:username});
                dispatch({type:"LOGIN"});
                localStorage.setItem("user",res.data.accessToken);
                history.push("/");
               console.log(state);
                
           
        }
        else{
            alert("incorrect password or email");
            history.push("/login");
        }


    })
    // .then(()=>{ 
    //     axios.get("http://localhost:3001/user/byemail/:email",JSON.stringify(useremail)).then((res,err)=>{
    //         console.log(JSON.parse(res));
    //         console.log(res.data.username);
    //         let username=res.data.user.username;
    //         Dispatch({type:"LOGGED-IN",username});
    //         if(err){
    //             console.log("could not fetch username");
    //         }
    //     })
    // });
    e.preventDefault();
}

useEffect(()=>{
 localStorage.getItem("user");
},[])   

useEffect(()=>{
    // localStorage.setItem()
   },[])  
 
    


    return (
        <motion.div
        exit="out"
        initial="initial"
        animate="in"
        variants={animeVar}
        transition={transitions} 
        
        className="login-wrapper">
        <div className="login">
            <form className="login-form" onSubmit={Submit}> 
                <input type="email"  name="Email" className="input" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}  /><br/>
                <input type="password" name="Password" className="input" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}   /><br/>
               
              {state.isLoggedIn ? <button className="btn" type="submit" disabled >Login</button> : <button className="btn" type="submit"  onClick={Submit}>Login</button> }
            </form>
           <p>Don't have an account?<Link to="/Register"><span>Register</span></Link></p>
    
           
        </div>
        </motion.div>
    )
}

export default Login;
