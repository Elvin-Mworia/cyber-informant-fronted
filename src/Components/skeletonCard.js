import React from 'react';
import Skeleton from "./skeleton.js";
import "./styles/home.scss";
import "./styles/skeletonCard.scss";
import Shimmer from "./shimmer.js"



const SkeletonCard=()=>{ 

    return(
        <div className="latest-card card  skeleton-wrapper">
            <div className="image-wrapper ">
                <Skeleton  type="image" className="image"/>
            </div>
            <div className="content-section content1">
              <h1 className="title"><Skeleton type="title"  >
                   </Skeleton> </h1> 
               <div className="metadata metadata1">
                   <Skeleton type="metadata"  />
                   <Skeleton type="metadata"  />
                   <Skeleton type="metadata"  />
        
               </div>
               <Skeleton type="content" className="content-holder"/>

            </div>
            <Shimmer/>
        </div>
    )
}
export default SkeletonCard;