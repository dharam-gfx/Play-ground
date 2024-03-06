import { createContext, useContext } from "react";

export const todoContext = createContext( {
    todos: [],
    addTodo: () => { },
    deleteTodo: ( id ) => { },
    updateTodo: ( id, todo ) => { },
    toggleComplete: ( id ) => { },
} )

export const TodoProvider = todoContext.Provider;

export default function useTodo() {
    return useContext( todoContext )
}
