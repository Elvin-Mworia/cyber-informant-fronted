export const cartReducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
              return {...state,Items:[...state.Items,{...action.payload}],totalItems:state.totalItems+1,Amount:state.Amount+action.payload.price} ;
        case "REMOVE_FROM_CART":
               return {...state,Items:state.Items.filter((prod)=>prod.id !== action.payload.id),Amount:state.Amount-action.payload.price,totalItems:state.totalItems-1};
        case "ORDERS_BOUGHT":
            return {Items:0,totalItems:0,Amount:0};
        default:
            return state;
    }

}