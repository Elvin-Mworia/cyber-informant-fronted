import {createContext,useReducer} from 'react';

import {user_Reducer} from './userReducer.js';
export const usercontext=createContext();

const initialstate={
    username:""
};


export default function UserContext ( {children}){
   
    const [user,Dispatch]=useReducer(user_Reducer,initialstate);
    return(
        <usercontext.Provider value={{user,Dispatch}}>
            {children}
        </usercontext.Provider>
    );
}
