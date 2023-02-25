import React, {useState, useEffect} from 'react';
import TodoItem from './component/TodoItem';
import TodoInput from './component/TodoInput';
import TodosList from './component/Todoslist';
import './App.css';


const App = () => {

  // const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // }, [todos])

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <TodoItem />
      </div>
      <div>
        <TodoInput
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}/>        
      </div>
      <div>
        <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
      </div>
    </div>
  );
}

export default App;
