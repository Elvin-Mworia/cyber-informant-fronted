import React,{useEffect,useState,useContext} from 'react';
import './styles/comment.scss';
import {useHistory,useParams} from "react-router-dom";
import axios from "axios";
import { set } from 'react-hook-form';
import {Logincontext} from "./Context/AppContext.js";
import {usercontext} from "./Context/UserContext.js";
//import {FaCommentDots as CommentIcon} from "react-icons/fa";
import {motion} from "framer-motion";
import { animeVar,transitions } from './animationVariants';


function Comments() {
    let {postid}=useParams();
    const history=useHistory();
    const [sender,setSender]=useState(false);
    const {state}=useContext(Logincontext);
    const {user}=useContext(usercontext);
    const [comments,setComments]=useState('');
    const [comlist,setcomDisplay]=useState([]);
    
    useEffect((req)=>{
        axios.get(`http://localhost:3001/comments/:${postid}`).then((res)=>{
            setcomDisplay(...comlist,res.data);
            comlist.reverse();
            console.log(res);
        })
        if(user.username){
            setSender(true);
        }
        

    },[]);
    
    function submit(req,e) {
     //making a post request to the server
     const commentData={
         //id belonging to the post
         postid:postid,
        //read username from the usercontext
    username:user.username,
    comment:comments
    }
    axios.post('http://localhost:3001/comments/create',commentData).then((res)=>{
        setComments('');
        setcomDisplay(...comlist,res.data);
    })
   // setcomDisplay(...comlist,res.data);
     e.preventDefault();
    }
    const checkLogin=()=>{
        if(state.isLoggedIn===false){
            history.push("/login");
        };
    }
    return (
      <motion.div
      exit="out"
      initial="initial"
      animate="in"
      variants={animeVar}
      transition={transitions}  class="comment-container">
          <div className='comment-wrapper'>
            <div className='comment-holder'>
                
                {comlist.map((comment,key)=>{
                    return(
                         comment.username===user.username ? <div style={{marginLeft:"auto"}}  className="comment "><p>{comment.comment}</p>
                        <div className="user"><p >{comment.username.slice(0,2)}</p></div></div> :
                        <div style={{marginRight:"auto"}} className="comment"><p>{comment.comment}</p>
                        <div className="user"><p >{comment.username.slice(0,2)}</p></div></div> 
                             
                    )
                    
                })}


            </div>

              
          <form onSubmit={null}>
          <input type="text" className="input-field" name="commentfield"
           onChange={(e)=>{setComments(e.target.value)}} onFocus={checkLogin} />
           {comments ? <button type="submit" className="btn" onClick={submit}>Comment</button> : 
              <button type="submit" className="btn" style={{backgroundColor:"gray"}} disabled onClick={submit}>Comment</button>}
       
          </form>
          </div>
         
          


      </motion.div>
       
        
    )
}

export default Comments
