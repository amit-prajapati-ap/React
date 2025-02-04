import { createContext, useContext } from "react";

//Creating an Context and feeding it with an empty object.
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo msg',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider