import React,{useEffect,useState} from 'react'
import {Link,useHistory} from 'react-router-dom';
import {Content} from './Content.js';
import {Popular} from './Popular.js';
import { FaFacebook} from "react-icons/fa";
import { FaTelegram} from "react-icons/fa";
import { FiTwitter} from "react-icons/fi";
import { FaReddit} from "react-icons/fa";
import {FaCommentDots as CommentIcon} from "react-icons/fa";
import './styles/home.scss';
import Comments from './Comments';




function Home() {
      const history=useHistory();
    // useEffect(()=>{})
    // const [post,setPost]=useState([]);
    return (
        <div className="root-container">
           <section>
            <div className="latest-post" >
                <h1 className="topic latest">Latest </h1>
             {Content.map((content,key)=>{
                 return (  
                    <div  className="card latest-card" >
                        <div className='image-wrapper' >
                             <img  src="https://media.istockphoto.com/photos/hacker-attack-cyber-crime-concept-picture-id1279501051?b=1&k=20&m=1279501051&s=170667a&w=0&h=9stdWhGmNUM10XS1vUAZGMK3AwuIjXU1foelmwALaTM=" alt=""/>
                             </div>
            
               <div className="content-section">
                <h1 className="title"  onClick={()=>(history.push(`/post/:${content.id}`))}>{content.title}</h1>  
                <div className="metadata"><span><i>created by</i>:Admin </span>
                <span> <i>Date</i>:2-10-2021</span>
                <CommentIcon className="icon" onClick={<Comments/>} />
                 </div> 
               <p className="content">{content.body}</p>
               </div>
               </div>
                 ) })}
              
                   

             
           

            </div>
            <div className="popular-post">
            <h1 className="topic popular">Popular </h1>
            {Popular.map((popular,key)=>{
                 return (  
                    <div  className="card popular-card" >
                        <div className='popular-image-wrapper' >
                             <img  src="https://media.istockphoto.com/photos/digitally-enhanced-shot-of-computer-code-superimposed-over-an-man-in-picture-id1322205512?b=1&k=20&m=1322205512&s=170667a&w=0&h=1q-Lx7kAqDbwmPpD6pDqqU-aVBWyxs_HoM3H408WdFw=" alt=""/>
                             </div>
            
               <div className="popular-content-section">
                <h1 className="title"  onClick={()=>(history.push(`/post/:${popular.id}`))}>{popular.title}</h1>
                <div className="metadata"><span><i>created by</i>:Admin </span>
                <span> <i>Date</i>:2-10-2021</span>
                <CommentIcon className="icon" onClick={''}/>
                 </div>    
               <p className="content-popular">{popular.body}</p>
               </div>
               </div>
                 ) })}

            </div>
           </section>
           <footer>
              
              <ul>
              <Link to="/About"> <li>About</li></Link>
              <Link to="/Contacts"> <li>Contact</li></Link>
              <Link to="/Privacy-policy"> <li>Privacy Policy</li></Link>
              </ul>
             
          <div className="social-media">
          <h1>Follow Us</h1><br/>  
          <div className="social_media_icons">
          <FaFacebook className="Icon"/>
          <FaTelegram className="Icon"/>
          < FiTwitter className="Icon"/>
          <FaReddit className="Icon"/>
          </div>
         
        
          </div>
          
      </footer>
         
          
        </div>
        
    )
}

export default Home;
