import React,{useEffect,useState,useContext} from 'react'
//import "./images/img4.png" ;
import {FaCartPlus as Cart} from 'react-icons/fa';
//import img4 from './images/img4.png';
import {useHistory } from 'react-router-dom';
import "./styles/resources.scss";
import {cartContext} from "./Context/CartContext.js";
import {prods} from "./prods";
import axios from "axios";
import {motion} from "framer-motion";
import { animeVar,transitions } from './animationVariants';


function Resources() {
    const history=useHistory();
    const{state,dispatch}=useContext(cartContext);
    const [products,setProducts]=useState([]);
  
    const data={
        items:state.Items,
        total:state.totalItems,
        Amount:state.Amount
    } 
    useEffect(() =>{
        axios.get("http://localhost:3001/resources/").then((res)=>{
            setProducts(res.data);
        })
        
        console.log(data);
        products.map((prod,key)=>{
            if(prod.cartstate===true){
              prod.cartstate=false;
              return(null);
           
            }});},[]);
        
   
    return (
      
        <motion.div
        exit="out"
        initial="initial"
        animate="in"
        variants={animeVar}
        transition={transitions} 
        
        className="container">
            <div className="cart"><Cart className="icon" /><p>{state.totalItems}</p>
           {state.Items.length>0 ? <button className="btn" onClick={()=>{history.push("/checkout")}}>Check Out</button>
             : <button className="btn-disabled" disabled="true">Check Out</button>} 
              </div> 
    <div className="card-container">
           {products.map((prod,key)=>{return( 
               <div className="card"  >

               <img src={`http://localhost:3001/images/product/${prod.image}`} className="productImage" alt=""/>
               <div className="quotation"><p>{prod.name}</p></div>
               <h1  >Description</h1>
   
               <div className="productDescription "  >
               <p>{prod.description}</p>
               </div> 
               <div className="quotation"> <p>Price:${prod.price}</p></div>
               {prod.cartstate ? <button className="btn" onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod}); prod.cartstate=false}}> Remove from Cart</button>  : <button className="btn" onClick={()=>{dispatch({type:"ADD_TO_CART",payload:prod}); prod.cartstate=true }}> Add To Cart</button>
               }
              
               </div>

           ) })} 







</div>
</motion.div>        
    )
}

export default Resources;
