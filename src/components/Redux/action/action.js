export const Add=(item)=>{
    return{
        type:"ADD_TO_CART",
        payload:item
    }
}
export const remove=(id)=>{
    return{
        type:"REMOVE_TO_CART",
        payload:id
    }
}