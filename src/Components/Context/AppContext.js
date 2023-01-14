//import React from 'react';
import {createContext,useReducer} from 'react';
import {Loginreducer} from './Loginreducer.js';

export const Logincontext=createContext();
const initialstate={
    isLoggedIn: false,
};


export default function AppContext( {children}){
    const [state,dispatch]=useReducer(Loginreducer,initialstate);
   
    return(
        <Logincontext.Provider value={{state,dispatch}}>
            {children}
        </Logincontext.Provider>
    );
}
