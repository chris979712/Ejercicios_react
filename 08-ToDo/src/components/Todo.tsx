import { type Todo as TodoType} from "../types/Todo"
import { type TodoId, type TodoMarkCompleted } from "../types/Todo"

interface Props extends TodoType{
    onRemoveTodo: (id: TodoId) => void,
    onToggleCompleteTodo: ({id, completed}: TodoMarkCompleted) => void
}

export function Todo(props: Props){
    const {title,id,completed, onRemoveTodo,onToggleCompleteTodo} = props;
    return (
        <div className="view">
            <input key={id} type="checkbox" className="toggle" checked={completed} onChange={(event) => {
                onToggleCompleteTodo({id, completed: event.target.checked})
            }}/>
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {
                    onRemoveTodo({id})
                }} />
        </div>
    )
}