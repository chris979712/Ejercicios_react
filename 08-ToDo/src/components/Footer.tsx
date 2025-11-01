import type { FilterValue } from "../types/Todo";
import { Filters } from "./Filter";

interface FooterProps{
    activeCounts: number,
    completedCounts: number,
    filterSelected: FilterValue,
    onClearCompleted: () => void,
    handleFilterChange: (filter: FilterValue) => void
}


export const Footer = (props: FooterProps) => {
    const {activeCounts,filterSelected,onClearCompleted,handleFilterChange,completedCounts} = props;
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCounts}</strong> - tareas pendientes
            </span>
            <Filters 
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {
                completedCounts > 0 &&
                <button 
                    className="clear-completed"
                    onClick={onClearCompleted}
                >
                    Borrar completados
                </button>
            }
        </footer>
    )
}