import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useParams,useHistory} from "react-router-dom";
import img4 from "./images/img4.png";
import "./styles/post.scss";
import {FaCommentDots as CommentIcon} from "react-icons/fa";
import moment from "moment";
//import {picker} from "./randImgepicker";
import {motion} from "framer-motion";
import { animeVar,transitions } from './animationVariants';



const Post = () => {
    let {id}=useParams();
    const history=useHistory();
    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/:${id}`).then((res)=>{
           setPost(res.data);
           console.log(post);
        
        }
    
      
        );
        const data={
            Clickcount:post.clickcount+1,
            id:post.id
        }
        // axios.put("http://localhost:3001/posts/click",data);

        

        },[]);
    const [post,setPost]=useState([]);
    return (
        <motion.div
        exit="out"
        initial="initial"
        animate="in"
        variants={animeVar}
        transition={transitions} 
        className='container'>
             <h1>{post.title} </h1>
             <div className="image-wrapper">
                 <div className="metadata"><p><i>By:{post.username}</i></p>
                 <p><i>Date:</i>{moment().format("DD-MM-YYYY")}</p>
                 <CommentIcon className="icon" onClick={()=>(history.push(`/post/:${post.id}/comments`))}/>
              

                 </div>
                 <img  
                            src={post.image===null ? window.location.origin + "/img4.png":`http://localhost:3001/images/post/${post.image}`}
                       
                            alt=""/>
                 </div>
             <section className="content-wrapper"><p className="content ">
                 {post.postText}
             </p></section>
            

            
        </motion.div>
    )
}

export default Post;
