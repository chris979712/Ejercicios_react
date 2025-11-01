import { TODO_FILTERS_BUTTONS } from "../utils/consts";
import { type FilterValue } from "../types/Todo";

interface FiltersProps{
    filterSelected: FilterValue,
    onFilterChange: (filter: FilterValue) => void
}

export function Filters(props: FiltersProps){
    const {filterSelected,onFilterChange} = props;

    return (
        <ul className="filters">
            {
                Object.entries(TODO_FILTERS_BUTTONS).map(([key, {href,literal}]) => {
                    const isSelected = key === filterSelected;
                    const className = isSelected ? 'selected' : '';
                    return (
                        <li key={key}>
                            <a className={className}
                                href={href}
                                onClick={(event) => {
                                    event.preventDefault();
                                    onFilterChange(key as FilterValue);
                                }}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}