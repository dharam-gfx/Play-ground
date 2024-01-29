import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants"

const initialState = [];


export default function cartItems(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART :
        return [
            ...state,
            {cartData: action.data}
        ]
        case REMOVE_TO_CART:
            state.length &&( state.length = state.length - 1);
            console.log("SS",state);
            return [...state];

        default:
            return state

    }
}