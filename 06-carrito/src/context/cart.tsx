import { createContext } from "react";
import type { Product } from "../classes/ProductClass";
import {useCartReducer} from "../hooks/useCart"

export type ProductInCart = {
    id: Product['id']
    name: Product['title']
    image: Product['thumbnail']
    price: Product['price']
    quantity: number
}

type CarContextType = {
    cart: ProductInCart[]
    addToCart: (product: Product) => void
    removeFromCart: (product: Product) => void
    clearCart: () => void
}

export const CartContext = createContext<CarContextType | null>(null)

export function CartProvider({children} : {children: React.ReactNode}){
    const {cart, addToCart, clearCart, removeFromCart} = useCartReducer()

    return (
        <CartContext value={{cart, addToCart,removeFromCart, clearCart}}>
            {children}
        </CartContext>
    )
}