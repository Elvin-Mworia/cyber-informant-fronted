import React,{useContext,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {cartContext} from "./Context/CartContext.js";
import './styles/checkout.scss';
import axios from "axios";



function Download() {
    const {state,dispatch}=useContext(cartContext);
    const history=useHistory();
    
useEffect(()=>{
  const Items= localStorage.getItem("download");
},[])
    return (
        <div className="container-checkout-wrapper">
          
           <div className="container-checkout">
           <div className="download-header"><h1 >Thank You For Your Support Follow The Links Below To Download Your Merchandise</h1></div> 
               
           {state.Items.map((item,key)=>{
                return(
                    <div className="checkout-card"><img src={`http://localhost:3001/images/product/${item.image}`} alt=""/>
                    <div className="item-name"><a href={item.url}>download</a><br/>
                   
                    </div>
                    </div>

                );
            })
           
            }
          
            <button className="btn" onClick={()=>{history.push("/")
        dispatch({type:'ORDERS_BOUGHT'})}}> Go to Homepage</button>
            </div>
            
            
        </div>
    )
}

export default Download;
