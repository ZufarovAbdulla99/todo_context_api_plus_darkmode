import { useTodoContext } from "../contexts/TodoContext"

function CompleteButton({ todo, children, className}) {
    const { dispatch } = useTodoContext()

    return <button
        className={className}
        onClick={() => dispatch({ type: "update", id: todo.id })}
    >
        {children}
    </button>   
}

export default CompleteButton