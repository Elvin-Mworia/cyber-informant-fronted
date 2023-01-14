import react from 'react';
import "./styles/home.scss";
import moment from 'moment';
import {useHistory} from "react-router-dom";
import axios from 'axios';
import {FaCommentDots as CommentIcon} from "react-icons/fa";
import {picker} from "./randImgepicker";
import SkeletonCard from './skeletonCard';

export default function Postrender({posts}){
 const history=useHistory();
    return(
        <>
        {posts ?
           posts.map((post,key)=>{
            return (  
               <div  className="card latest-card" >
                   <div className='image-wrapper' >
                        <img    src={post.image===null? picker() :`http://localhost:3001/images/post/${post.image}`} alt=""/>
                        </div>
       
          <div className="content-section">
           <h1 className="title"  onClick={()=>(history.push(`/post/:${post.id}`))}>{post.title}</h1>  
           <div className="metadata"><span><i>created by</i>:{post.username} </span>
           <span> <i>Date</i>:{moment().format("DD-MM-YYYY")}</span>
          <CommentIcon className="icon" onClick={()=>(history.push(`/post/:${post.id}/comments`))}/>
            </div> 
          <p className="content">{post.postText}</p>
             
          </div>
          </div>
            ) }) 
        
        :[0,1,2,3,4].map((n,key)=>{
             return(
              <SkeletonCard/>  

             )

        })  }
     {/* {  [0,1,2,3,4].map((n,key)=>{
             return(
              <SkeletonCard/>  

             )

        }) }  */}
    
            </>
         

    );
}