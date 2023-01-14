export const user_Reducer=(user,action)=>{
    switch(action.type){
        case "LOGGED-IN":
            return {...user,username:action.payload};

        case "LOGGED_OUT":
            return {...user,username:""}
       
        default:
              return user;
    }
}