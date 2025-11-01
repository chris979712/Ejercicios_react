import type { TodoTitle } from "../types/Todo"
import { CreateTodo } from "./CreateToDo"

interface HeaderProps{
    onAddToDo: ({title}: TodoTitle) => void
}

export function Header(props: HeaderProps){
    const {onAddToDo} = props;
    return (
        <header className="header">
            <h1>Todo <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" 
            alt="imagen de react" style={{width: '60px', height: 'auto'}} /></h1>
            <CreateTodo onAddToDo={onAddToDo} />
        </header>
    )
}