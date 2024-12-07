import { createContext, useContext, useReducer, useState } from "react";

const initValue = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: true },
    { id: 3, text: "Deploy application", completed: false },
  ];

export const TodoContext = createContext(null)

function reducer(state, action) {
    switch(action.type) {
        case "add":
            return [
                ...state,
                { id: Date.now(), text: action.payload, completed: false },
            ];
        case "update":
            const updatedTodos = state.map((todo) => {
                if(todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                } else {
                    return todo
                }
            })

            return updatedTodos
        case "delete":
            const filteredTodos = state.filter((todo) => todo.id !== action.id)
            return filteredTodos
        default:
            return state;
    }
}

function TodoProvider({children}) {
    const [text, setText] = useState("")

    const [todos, dispatch] = useReducer(reducer, initValue)

    function handleSubmit(e) {
        e.preventDefault();
    
        dispatch({ type: "add", payload: text });
        setText("");
      }
    
    return (
        <TodoContext.Provider value={{text, setText, todos, dispatch, handleSubmit}}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodoContext() {
    const context = useContext(TodoContext)

    if(!context){
        throw new Error("TodoContext must be inside TodoProvider")
    }
    
    return context;
}

export default TodoProvider