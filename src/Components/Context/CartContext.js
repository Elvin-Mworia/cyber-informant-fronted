import {createContext,useReducer} from 'react';
import {cartReducer} from "./cartReducer.js";

const initialState ={
    Items: [],
    Amount: 0,
    totalItems: 0,

}
 export const cartContext=createContext();

 export const Cart=({children})=>{
     const [state,dispatch]=useReducer(cartReducer,initialState);
     return(
<cartContext.Provider value={{state,dispatch}}>
    {children}
</cartContext.Provider>

     )
 }


 