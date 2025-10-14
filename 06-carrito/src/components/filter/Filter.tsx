import { useState, useId } from 'react';
import { useFilters } from '../../hooks/useFilters';
import './filter.css';

export function Filters() {
    const {filters, setFilters} = useFilters();
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: Number(event.target.value)
        }))
    }

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
                <input onChange={handleChangePrice} type="range" id='price' min='0' max='1000' value={filters.minPrice}/> 
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory} value={filters.category}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}