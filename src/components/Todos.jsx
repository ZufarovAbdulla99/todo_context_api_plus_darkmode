import { useTheme } from "../contexts/ThemeContext";
import { useTodoContext } from "../contexts/TodoContext";
import CompleteButton from "./CompleteButton";
import DeleteButton from "./DeleteButton";

function Todos() {
  const { todos } = useTodoContext();
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md
        ${theme === "dark" ? "bg-zinc-900" : "bg-white"}
    `}
    >
      <h2
        className={`text-2xl font-bold mb-4 
        ${theme === "dark" ? "text-white" : "text-gray-800"}
        `}
      >
        Todo List
      </h2>
      <ul
        className={`space-y-2 rounded-lg ${
          theme === "dark" ? "bg-slate-500" : "bg-slate-300"
        }`}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`
              flex items-center justify-between p-3 rounded-md
              
            `}
          >
            <span
              className={`${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
              } ${theme === "dark" ? "text-slate-100" : ""}`}
            >
              {todo.text}
            </span>
            <CompleteButton
              todo={todo}
              className={`
                    px-3 py-1 rounded-md text-sm
                    ${
                      todo.completed
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-700"
                    }
                    ${theme === "light" ? "bg-gray-700 text-white" : ""}
                  `}
            >
              {todo.completed ? "Done" : "Complete"}
            </CompleteButton>
            <DeleteButton
              todo={todo}
              className={`px-3 py-1 rounded-md text-sm
                ${
                  theme === "dark"
                    ? "bg-pink-700 text-slate-200"
                    : "bg-red-700 text-white"
                }
                `}
            >
              Delete
            </DeleteButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;