import './Footer.css'
import { useCart } from '../../hooks/useCart';

type FooterProps = {
    filters?: any
}

export function Footer(props: FooterProps){
    const {cart} = useCart();
    return(
        <footer className='footer'>
            {
                JSON.stringify(cart, null, 2)
            }
            {/** 
                <h4>Prueba técnica de React  <span>Chris</span></h4>
                <h5>Carrito de compras con useContext & useReducer</h5>
            */}
        </footer>
    )
}