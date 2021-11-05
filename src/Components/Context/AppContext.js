//import React from 'react';
import {createContext,useReducer} from 'react';
import {Loginreducer} from './Loginreducer.js';

export const Logincontext=createContext();



export default function AppContext( {children}){
    const [state,dispatch]=useReducer(Loginreducer,{isLoggedIn:false});
    return(
        <Logincontext.Provider value={{state,dispatch}}>
            {children}
        </Logincontext.Provider>
    );
}


