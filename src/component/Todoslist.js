import React from "react";

const TodosList = ({todos, setTodos, setEditTodo}) => {

    const inputList = document.querySelectorAll('.list')
    console.log(inputList);

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))

        const lastItemArray = (arr) => {
            let lastItem = arr.pop()
            console.log(lastItem);
        }
        lastItemArray(inputList)
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }

    return (
        <div>
            {todos.map((todo) => (
                <li className="todo-list" key={todo.id}>
                    <input type="text" value={todo.title} className='list'
                     onChange={(e) => e.preventDefault()} />
                    <div className="fa-container">
                        <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}


export default TodosList;