import {useState } from 'react'
import './App.css'
import { Products } from './components/products/Product'
import {products as initialProducts} from './mocks/products.json'
import { Header } from './components/Header/Header';
import { Footer } from './components/footer/Footer';
import { useFilters } from './hooks/useFilters';
import { ShopCar } from './components/cart/cart';
import { CartProvider} from './context/cart';

function App() {
  const [products] = useState(initialProducts);
  const {filterProducts} = useFilters();
  const filteredProducts = filterProducts(products);


  return (
    <CartProvider>
      <Header />
      <ShopCar />
      <Products products={filteredProducts}/>
      <Footer />
    </CartProvider>
  )
}

export default App
