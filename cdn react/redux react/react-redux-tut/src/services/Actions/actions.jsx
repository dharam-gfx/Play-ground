import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

export const addToCart = ( data ) => {
    console.log("Action",data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeCartItem = ( id ) => {
    console.log("Action",id);
    return {
        type: REMOVE_TO_CART,
        id: id
    }
}


