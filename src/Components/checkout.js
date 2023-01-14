import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {cartContext} from "./Context/CartContext.js";
import './styles/checkout.scss';
import axios from "axios";

import {motion} from "framer-motion";
import { animeVar,transitions } from './animationVariants';

function Checkout() {
    const {state,dispatch}=useContext(cartContext);
    const history=useHistory();
    const amount=state.Amount;
    return (
        <motion.div className   exit="out"
        initial="initial"
        animate="in"
        variants={animeVar}
        transition={transitions}  className="container-checkout-wrapper">
           <div className="container-checkout">
            {state.Items.map((item,key)=>{
                return(
                    <div className="checkout-card"><img src={`http://localhost:3001/images/product/${item.image}`} alt=""/>
                    <div className="item-name"><h1>{item.name}</h1><br/>
                    <p>Price:${item.price}</p>
                    </div>
                    </div>

                );
            })}
            <button className="btn" onClick={()=>{history.push("/payment")}}> Proceed to Payment</button>
            </div>
            {/* <button className="btn" onClick={()=>{axios.post("http://localhost:3001/paypal/pay",amount).then((res)=>{ console.log(res);})}}> Proceed to Payment</button> */}
            
        </motion.div>
    )
}

export default Checkout;