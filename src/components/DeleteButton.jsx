import { useTodoContext } from "../contexts/TodoContext";

function DeleteButton({ todo, children, className }) {
  const { dispatch } = useTodoContext();

  return (
    <button
      className={className}
      onClick={() => dispatch({ type: "delete", id: todo.id })}
    >
      {children}
    </button>
  );
}

export default DeleteButton