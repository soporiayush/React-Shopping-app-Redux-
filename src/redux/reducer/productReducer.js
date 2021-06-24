import { ActionTypes } from "../constants/action-type";

const initialState={
    products:[{
        id:1,
        title:"Ayush",
        category:"Electronics",
    }]
}
export const productReducer = (state,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
  
        default:
            return state
    }
}