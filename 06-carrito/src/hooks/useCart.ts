import { useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart";
import { CartContext } from "../context/cart";
import type { Product } from "../classes/ProductClass";

export function useCart(){

    const context = useContext(CartContext);

    if(context === null)
    {
        throw new Error('usarCart must be used within a CartProvider')
    }

    return context;
}

export function useCartReducer(){
    const [cart, dispatch] = useReducer(cartReducer,[])
    
    const addToCart = (product: Product) => {
        dispatch({type: 'ADD_TO_CART', payload: product})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }

    const removeFromCart = (product: Product) => {
        dispatch({type: 'DELETE_FROM_CART', payload: product})
    }

    return {cart, addToCart, clearCart, removeFromCart}
}