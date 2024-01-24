import { ADD_TO_CART } from "../Constants"

const initialState = {
    cartData:[]
}

export default function cartItems(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART :
            console.log(action);
        return{
            ...state,
            cartData: action.data
        }
        default:
            return state

    }
}