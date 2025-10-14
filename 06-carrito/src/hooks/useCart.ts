import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart(){

    const context = useContext(CartContext);

    if(context === null)
    {
        throw new Error('usarCart must be used within a CartProvider')
    }

    return context;
}