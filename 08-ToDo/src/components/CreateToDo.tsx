import { useState } from "react"
import type { TodoTitle } from "../types/Todo"

interface CreateTodoProps{
    onAddToDo: ({title}: TodoTitle) => void
}

export function CreateTodo(props: CreateTodoProps){
    const {onAddToDo} = props;
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        onAddToDo({title: inputValue});
        setInputValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className="new-todo" 
            value={inputValue} 
            onChange={(event) => {setInputValue(event.target.value)}}
            placeholder="¿Qué deseas hacer?"
            autoFocus/>
        </form>
    )
}