import { useState } from "react"
import { Todos } from "./components/Todos";
import {type TodoId, type TodoMarkCompleted } from "./types/Todo";

const MockToDos = [
    {
      id: 1,
      title: 'toDo 1',
      completed: true
    },
    {
      id: 2,
      title: 'toDo 1',
      completed: false
    },
    {
      id: 3,
      title: 'toDo 1',
      completed: false
    }
  ]

function App() {
  const [todos, setTodos] = useState(MockToDos);

  const handleRemove = ({id}: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const handleCompleted = ({id, completed}: TodoMarkCompleted) => {
    const newtodos = todos.map(todo => {
      if(todo.id === id){
        return {
          ... todo,
          completed
        }
      }
      return todo;
    }) 
    setTodos(newtodos);
  }

  return (
    <div className="todoapp">
      <h1>
        Todo mvc
      </h1>
      <Todos todos={todos} onRemoveTodo={handleRemove} onToggleCompleteTodo={handleCompleted}></Todos>
    </div>
  )
}

export default App
