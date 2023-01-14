import React,{useState,useEffect,useContext} from 'react';
import "./styles/createpost.scss";
import {useHistory} from 'react-router-dom'
import axios from "axios"
import {usercontext} from  './Context/UserContext.js';
import {motion} from "framer-motion";
import { animeVar,transitions } from './animationVariants';
function Createpost() {
    const history=useHistory();
    const {user}=useContext(usercontext);
    const[username,setUsername]=useState("");
    useEffect(()=>{
         user.username?setUsername(user.username): history.push("/login");
         
     },[])
  
    const [title,setTitle]=useState("");
    const [image,setImage]=useState("");
    const [postText,setPostText]=useState("");
   // image:image,
    const data={
        title:title,
       
        postText:postText,
        username:username
    }
    const submit=(e)=>{
      axios.post('http://localhost:3001/posts/create',data).then((res)=>{
          if(res.status===200){
            history.push('/');
           
    }
          })
          e.preventDefault();
       }


    return (
        <motion.div 
        exit="out"
        initial="initial"
        animate="in"
        variants={animeVar}
        transition={transitions} 
        className="createpost">
            <h1>Create Post</h1>
            <form className='createpost-form'  onSubmit={submit} method="POST" encType="multipart/form-data" >
                <label>Insert a Heading</label><br/>
                <input type="text" name="title" className="input-head" onChange={(e)=>setTitle(e.target.value)} />
                {/* <label>Add an Image(optional)</label><br/> */}
                {/* <input type="file" name="image" onChange={(e)=>setImage(e.target.files[0])} className="input-image" placeholder="Pick Image"/> */}
                <label>Post content goes here</label>
                <textarea name="postText" onChange={(e)=>setPostText(e.target.value)}className="input-content" placeholder="write.."></textarea>
              
               <button type="submit"  className="btn">Publish</button> 
               {/* { postText ?
               <button type="submit" disabled style={{backgroundColor:"gray"}} className="btn">Publish</button>} */}
            </form>

            
        </motion.div>
    )
}

export default Createpost;
