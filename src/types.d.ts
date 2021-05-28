interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoList {
    todos: Todo
}

interface Button {
    text: string;
}