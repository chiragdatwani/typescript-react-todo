import React from 'react'

interface Props {
    todo: Todo;
    handleDeleteTodo: (id: string) => void;
    handleToggleCompleted: (id: string) => void;
}


const TodoItem:React.FC<Props> = ({todo, handleDeleteTodo, handleToggleCompleted}) => {

    return (
        <div>
            <input type="checkbox" onChange={() => handleToggleCompleted(todo.id)}/>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </div>
    )
}

export default TodoItem
