const initialState={
    carts:[]
};

export const cartReducer=(state=initialState,action)=>{
switch(action.type){
    case "ADD_TO_CART":
        return{
            ...state,
            carts:[...state.carts,action.payload]
        }
        default :return state;
}
}