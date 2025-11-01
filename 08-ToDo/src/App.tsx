import { useState } from "react"
import { Todos } from "./components/Todos";
import {type FilterValue, type TodoId, type TodoMarkCompleted, type TodoTitle } from "./types/Todo";
import { TODO_FILTERS } from "./utils/consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


const MockToDos = [
    {
      id: '1',
      title: 'toDo 1',
      completed: true
    },
    {
      id: '2',
      title: 'toDo 1',
      completed: false
    },
    {
      id: '3',
      title: 'toDo 1',
      completed: false
    }
  ]

function App() {
  const [todos, setTodos] = useState(MockToDos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);
  
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

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter);
  }

  const handleAddToDo = ({title}: TodoTitle) => {
    const newTodo ={
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const CompletedTodos = todos.filter(todo => todo.completed).length
  const ActiveTodos = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todoapp">
      <Header onAddToDo={handleAddToDo}/>
      <Todos 
        todos={filteredTodos} 
        onRemoveTodo={handleRemove} 
        onToggleCompleteTodo={handleCompleted}>
      </Todos>
      <Footer
        activeCounts={ActiveTodos}
        completedCounts={CompletedTodos}
        onClearCompleted={handleRemoveAllCompleted}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      >
      </Footer>
    </div>
  )
}

export default App
