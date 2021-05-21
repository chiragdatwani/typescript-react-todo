import React, { useState } from 'react';
import TodoList from './TodoList';


const TodoForm= () => {

    const [ todos, setTodos ] = useState<Todo[] | []> ([]);
    const [ text, setText ] = useState<string> ('');

    const handleNewTodo = (e: any) => {

        e.preventDefault();

        if(text.length > 0){
            const newTodo: Todo = {
                id: Math.round(Math.random() * 100000).toString(),
                text: text,
                completed: false
            };

            setTodos([...todos, newTodo]);
            setText('');
        }
    };

    const handleDeleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };

    const handleToggleComplete = (id: string) => {
        setTodos(todos.map( (todo: Todo) => todo.id === id ? ({...todo, completed : !todo.completed}) : todo));
    };

    return (
        <>
        <form onSubmit={handleNewTodo}>
            <input
                value={text}
                onChange={ e => setText(e.target.value)}
            >
            </input>
            <button type='submit' >Add Todo</button>
        </form>
        <TodoList handleToggleCompleted={handleToggleComplete} handleDeleteTodo={handleDeleteTodo} todos={todos} />
        </>
    )
}
export default TodoForm