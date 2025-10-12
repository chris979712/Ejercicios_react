import { useState } from 'react'
import './App.css'
import { Products } from './components/products/Product'
import {products as initialProducts} from './mocks/products.json'
import type { Product } from './classes/ProductClass';
import { Header } from './components/Header/Header';
function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products: Product[]) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          filters.category === product.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products);


  return (
    <>
      <Header />
      <Products products={products}/>
    </>
  )
}

export default App
