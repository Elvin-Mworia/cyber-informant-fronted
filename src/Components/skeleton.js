import React from "react";
import "./styles/skeleton.scss";


const Skeleton=({type})=>{ 
const classes= `skeleton ${type}`

 return(
<div className={classes} ></div>
 )




}
export default Skeleton;