import {ClearCartIcon, CartIcon} from "../icon/Icon";
import { useId } from "react";
import { useCart } from "../../hooks/useCart";
import './cart.css'
import type {ProductInCart} from '../../context/cart'


type CartItemProps = {
    product: ProductInCart,
    addToCart: (product: ProductInCart) => void
}

function CartItem (props: CartItemProps){
    const {product, addToCart} = props;
    return (
        <li>
            <img src={product.image} 
            alt={product.name} />
            <div>
                <strong>{product.name}</strong> - {product.price}
            </div>
            <footer>
                <small>
                    Cantidad: {product.quantity}
                </small>
                <button onClick={() => addToCart(product)}>+</button>
            </footer>
        </li>
    )
}

export function ShopCar() {
    const carCheckBoxId = useId();
    const {cart, clearCart, addToCart} = useCart();
    return (
        <>
            <label className="cart-button" htmlFor={carCheckBoxId}>
                <CartIcon />
            </label>
            <input id={carCheckBoxId} type="checkbox" hidden/>

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                            <CartItem key={product.id} product={product} addToCart={() => addToCart(product)}></CartItem>
                        ))
                    }
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}