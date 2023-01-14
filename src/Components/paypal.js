import React,{useContext} from "react";
import ReactDOM from "react-dom";
import {useHistory} from "react-router-dom"
import {cartContext} from "./Context/CartContext.js";
import {usercontext} from "./Context/UserContext.js";
import "./styles/paypal.scss";
import axios from 'axios';

//import {prods} from "./prods.js"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Paypal() {
    const {state,dispatch}=useContext(cartContext);
    const history=useHistory();
  const {user}=useContext(usercontext);
  // const {Items}=useContext(cartContext);
  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: state.Amount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
  //  axios.post("http://localhost:3001/productBought",{user:user,list:state.Items})
  //localStorage.setItem("download",state.Items)
    history.push("/download");
    axios.get("http://localhost:3001/orders") ;
    return actions.order.capture();
  };

  return (
    <div className="container-checkout-wrapper">
      <div className="container=checkout">
    <PayPalButton 
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
    </div>
    </div>
 );
}
export default Paypal;