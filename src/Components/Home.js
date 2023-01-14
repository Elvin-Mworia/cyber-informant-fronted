import React,{useEffect,useState} from 'react'
import {Link,useHistory} from 'react-router-dom';
// import {Content} from './Content.js';
// import {Popular} from './Popular.js';
import { FaFacebook} from "react-icons/fa";
import { FaTelegram} from "react-icons/fa";
import { FiTwitter} from "react-icons/fi";
import { FaReddit} from "react-icons/fa";
import axios from "axios";
import moment from 'moment';
import PostRender from "./postRender";
import {picker} from "./randImgepicker";
import {motion} from "framer-motion";
import { animeVar,transitions } from './animationVariants';
import img4 from "./images/img4.png";

import {FaCommentDots as CommentIcon} from "react-icons/fa";
import './styles/home.scss';
import Pagination from "./pagination.js";
//import Comments from './Comments';
import SkeletonCard from './skeletonCard';





function Home() {
  useEffect(()=>{
    setTimeout(()=>{
      axios.get("http://localhost:3001/posts/").then((res)=>{
        setPost(res.data);
        console.log(posts);
        axios.get("http://localhost:3001/posts/popular").then((res)=>{
        setPopular(res.data);
        console.log(popularPost);
    })
 
     
    }) 
     
    },0) 
  },[])
      const history=useHistory();
      
    const popular=[];
    const [popularPost,setPopular]=useState([])
   const clickcount=()=>{ posts.map((post,key)=>{
      return popular.push(post.clickcount);
    })}
    const heighestTolowest=popular.sort((a,b)=>{return b-a});
    const popularCount=heighestTolowest.slice(0,4);

    
  //  const heightTolowest=popular.sort((a,b)=>{return b-a});
     const [posts,setPost]=useState([]);
     const [currentPage,setCurrentPage]=useState(1);
     const [postsPerPage]=useState(5);
     const indexOfLastPost=currentPage*postsPerPage;
const indexOfFirstPost=indexOfLastPost-postsPerPage;
const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);
           const paginate =(pageNumber)=>setCurrentPage(pageNumber);
           const array=[0,1,2,3,4];
           
    return (
        < motion.div exit="out"
        initial="initial"
        animate="in"
        variants={animeVar}
        transition={transitions}
        style={{overFlowY:"hidden"}}
        className="root-container">
           <section>
            <div className="latest-post" >
                <h1 className="topic latest">Latest </h1>
             <PostRender posts={currentPosts}/>
             <Pagination postsPerPage={postsPerPage} totalPost={posts.length} paginate={paginate} className="pagination"/>
            </div>
            <div className="popular-post">
            <h1 className="topic popular">Popular </h1>
            {popularPost.length==null ?
            array.map((n,key)=>{
              return(
               <SkeletonCard/>  
 
              )
 
         })       : 
           popularPost.map((popular,key)=>{
           //  
                return (  
                   <div  className="card popular-card" >
                       <div className='popular-image-wrapper' >
                             <img  
                            src={popular.image===null? process.env.PUBLIC_URL+"/img4.png":`http://localhost:3001/images/post/${popular.image}`}
                       
                            alt=""/>
                            </div>
                            
           
              <div className="popular-content-section">
               <h1 className="title"  onClick={()=>(history.push(`/post/:${popular.id}`
              ) )}>{popular.title}</h1>
               <div className="metadata"><span><i>created by</i>:{popular.username} </span>
               <span> <i>Date</i>:{moment().format("DD-MM-YYYY")}</span>
               <CommentIcon className="icon" onClick={()=>(history.push(`/post/:${popular.id}/comments`))}/>
                </div>    
              <p className="content-popular">{popular.postText}</p>
              </div>
              </div>
                ) })}
       
         

            </div>
           </section>
           <footer>
              
              <ul>
              <Link to="/About"> <li>About</li></Link>
              <Link to="/Contact"> <li>Contact</li></Link>
              <Link to="/Privacy-policy"> <li>Privacy Policy</li></Link>
              </ul>
             
          <div className="social-media">
          <h1>Follow Us</h1>  
          <div className="social_media_icons">
          <FaFacebook className="Icon"/>
          <FaTelegram className="Icon"/>
          < FiTwitter className="Icon"/>
          <FaReddit className="Icon"/>
          </div>
         
        
          </div>
          
      </footer>
         
          
        </motion.div>
        
    )
}

export default Home;
