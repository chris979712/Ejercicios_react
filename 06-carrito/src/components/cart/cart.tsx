import { RemoveFromCartIcon, ClearCartIcon, CartIcon} from "../icon/Icon";
import { useId } from "react";
import './cart.css'

export function ShopCar() {
    const carCheckBoxId = useId();

    return (
        <>
            <label className="cart-button" htmlFor={carCheckBoxId}>
                <CartIcon />
            </label>
            <input id={carCheckBoxId} type="checkbox" hidden/>

            <aside className="cart">
                <ul>
                    <li>

                    </li>
                </ul>

                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}