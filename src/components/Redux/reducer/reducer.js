const initialState={
    carts:[]
};

export const cartReducer=(state=initialState,action)=>{
switch(action.type){
    case "ADD_TO_CART":
        let product={}
        let flag =false;
        if(action.payload.qnty===undefined){
            action.payload.qnty=1;
        }
       
        for(let i=0;i<state.carts.length;i++){
            if(state.carts[i].id==action.payload.id){
                state.carts[i].qnty= state.carts[i].qnty+1
                flag=true;
                break;
            }
        }
        if(flag){
            return{
                ...state,
                carts:[...state.carts]
            }
        }else{
            return{
                ...state,
                carts:[...state.carts,action.payload]
            }
        }
       
       case "REMOVE_TO_CART":
        const data=state.carts.filter((el)=>{
            return el.id!==action.payload;
        }   
        )
        return{
            ...state,
            carts:data
        }
        default :return state;
}

}