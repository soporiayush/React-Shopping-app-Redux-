import { ActionTypes } from "../constants/action-type"
export const setProducts = (products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (products)=>{
    return{
        type: ActionTypes.SELECT_PRODUCT,
        payload: products,
    }
}