import { useContext } from 'react'
import type { Product } from '../classes/ProductClass';
import { FiltersContext } from '../context/filter';

export function useFilters(){
    const {filters, setFilters} = useContext(FiltersContext);

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

    return {filterProducts, setFilters, filters}
}