import './Product.css'
import { AddToCartIcon } from '../icon/Icon'
import type { Product } from '../../classes/ProductClass'
import { useCart } from '../../hooks/useCart'

interface ProductProps{
    products: Product[];
}

export function Products(props: ProductProps){
    const {products} = props;
    const {addToCart} = useCart();
    return (
        <main className='products'>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong>
                            </div>
                            <div>
                                <button onClick={() => addToCart(product)}>
                                    <AddToCartIcon />
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}