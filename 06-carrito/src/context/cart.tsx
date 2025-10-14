import { createContext, useState } from "react";
import type { Product } from "../classes/ProductClass";

type ProductInCart = {
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
    const [cart, setCart] = useState<ProductInCart[]>([])

    const addToCart = (product: Product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id);
        if(productInCartIndex >= 0){
            return setCart(prevCart => prevCart.map(item => 
                item.id === product.id
                    ?  {...item, quantity: item.quantity + 1}
                    : item
            ))
        }else{
            setCart(prevState => [
            ...prevState,
                {
                    id: product.id,
                    name: product.title,
                    image: product.thumbnail,
                    price: product.price,
                    quantity: 1
                }
            ]);
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = (product: Product) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    return (
        <CartContext value={{cart, addToCart,removeFromCart, clearCart}}>
            {children}
        </CartContext>
    )
}