import { useState } from 'react';
import './filter.css';

export function Filters() {
    const [minPrice, setMinPrice] = useState(0);

    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(event.target.value))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio a partir de: </label>
                <input onChange={handleChangePrice} type="range" id='price' min='0' max='1000'/> 
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category">
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}