import React from 'react'
import TodoItem from './TodoItem'

interface Props {
    todos: Todo[];
    handleDeleteTodo: (id: string) => void;
    handleToggleCompleted: (id: string) => void;
}

const TodoList: React.FC<Props> = ({todos, handleDeleteTodo, handleToggleCompleted}) => {
    return (
        <ul>
            {todos.map( todo => (
                <TodoItem handleDeleteTodo={handleDeleteTodo} handleToggleCompleted={handleToggleCompleted} todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList
