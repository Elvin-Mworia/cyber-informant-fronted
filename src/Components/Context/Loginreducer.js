export const Loginreducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,isLoggedIn:!state.isLoggedIn};
        case "LOGOUT":
            return {...state,isLoggedIn:!state.isLoggedIn};    

        default:
              return state;
    }
}