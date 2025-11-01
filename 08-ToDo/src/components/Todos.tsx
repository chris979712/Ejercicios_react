import { type Todo as TodoType } from "../types/Todo";
import { Todo } from "./Todo";
import { type TodoId, type TodoMarkCompleted } from "../types/Todo";

type TodosProps = {
    todos: TodoType[],
    onRemoveTodo: ({id}: TodoId) => void,
    onToggleCompleteTodo: ({id, completed}: TodoMarkCompleted) => void
}


export function Todos(props: TodosProps){
    const {todos, onRemoveTodo, onToggleCompleteTodo} = props;
    return (
        <ul className="todo-list">
            {
                todos.map(todo => (
                    <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                        <Todo 
                            id={todo.id} 
                            title={todo.title} 
                            completed={todo.completed} 
                            onRemoveTodo={id => {onRemoveTodo(id)}}
                            onToggleCompleteTodo={onToggleCompleteTodo}/>
                    </li>
                ))
            }
        </ul>
    )
}