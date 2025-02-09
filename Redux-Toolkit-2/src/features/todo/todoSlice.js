import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

function addTodoList(state, action) {
    const todo = {
        id: nanoid(),
        text: action.payload
    }
    state.todos.push(todo)
}
function removeTodoList(state, action) {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload)
}

function updateTodo(state, action) {
    state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
            todo.text = action.payload.text
        }
    })
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: addTodoList,
        removeTodo: removeTodoList,
        updateTodo
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer