import { type Todo as TodoTypes} from "../types/Todo"


interface FooterProps{
    activeCounts: number,
    todos: TodoTypes[],
    onClearCompleted: boolean
}


export const Footer = (props: FooterProps) => {
    const {activeCounts,todos,onClearCompleted} = props;
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length}</strong> - tareas pendientes
            </span>
            
        </footer>
    )
}