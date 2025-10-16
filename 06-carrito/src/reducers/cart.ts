import type { ProductInCart } from "../context/cart"
import type { Product } from "../classes/ProductClass"

type CartAction = 
    | {type: 'ADD_TO_CART'; payload: Product}
    | {type: 'DELETE_FROM_CART'; payload: Product}
    | {type: 'CLEAR_CART'}

type CartState = ProductInCart[];

type CartActionHandler = (state: CartState, action: any) => CartState;

const ACTION_HANDLERS: Record<CartAction['type'], CartActionHandler> = {
    ADD_TO_CART: (state, action)=> {
        const product = action.payload
        const index = state.findIndex(item => item.id === product.id)
        if(index >= 0){
            return state.map(item => 
                item.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
            )
        }else{
            return [
                ...state,
                {
                    id: product.id,
                    name: product.title,
                    image: product.thumbnail,
                    price: product.price,
                    quantity: 1
                }
            ]
        }
    },

    DELETE_FROM_CART: (state, action) => {
        const productToDelete = action.payload
        return state.filter(item =>  item.id !== productToDelete.id)
    },

    CLEAR_CART: () => []
}

export const cartReducer = (state: ProductInCart[], action: CartAction) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
} 