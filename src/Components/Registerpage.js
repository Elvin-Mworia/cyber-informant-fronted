import React,{useState} from 'react';
import './styles/register.scss';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";
import {motion} from "framer-motion";
import { animeVar,transitions } from './animationVariants';

const Schema=yup.object().shape({
    Email:yup.string().email().required("Enter a valid email"),
    Username:yup.string().required("Enter a username"),
    Password:yup.string().min(4,"Must be atleast Characters").max(15,"Max Characters is 15").required("Ene"),
    Confirmpassword:yup.string().oneOf([yup.ref("password"),null]).required("Password should match!")


});



function Registerpage() {
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [confirm,setConfirm]=useState('');
    const history=useHistory();
    const {register,handleSubmit,errors}=useForm({resolver:yupResolver(Schema)});
    function Submit(e){
        const data={email:email,password:password,username:username};
       console.log(data);
  axios.post("http://localhost:3001/auth/register",data).then((res)=>{
    console.log(res);
    history.push('/Login');
        }
        ); 
 
    
       e.preventDefault();
    }
    return (
        <motion.div
        exit="out"
        initial="initial"
        animate="in"
        variants={animeVar}
        transition={transitions}  className="register-wrapper display-register">
        <div className="register">
        <h1>Pick a unique username and a password to create an account </h1>
            <form className="register-form" onSubmit={Submit}>
            <input type="email" name="Email" className="input" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                <input type="text" name="Username" className="input" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} /><br/>
                <input type="password" name="Password" className="input" placeholder="Password"
                onChange={(e)=>{setPassword(e.target.value)}} /><br/>
                <input type="password" name="Confirmpassword" className="input" placeholder="Confirm Password" onChange={(e)=>{setConfirm(e.target.value)}} /><br/>
               
                <button className="btn" type="submit">Create</button>
            </form>
        
           
        </div>
        </motion.div>
    )
}

export default Registerpage;
