import { useTheme } from "../contexts/ThemeContext";
import { useTodoContext } from "../contexts/TodoContext";
import Button from "./Button";
import Input from "./Input"
import ThemeButton from "./ThemeButton";

function Form() {
  const { text, setText, handleSubmit } = useTodoContext()
  const { theme, toggleTheme } = useTheme()

    return <div className={`max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md 
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}
    `}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex justify-between py-2 px-2">
              <label
                htmlFor="user-input"
                className={`block text-sm font-medium mb-2 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-700"}`}
              >
                Enter your message
              </label>
              <ThemeButton />
            </div>
            <Input 
                id="user-input"
                type="text"
                text={text}
                setText={setText}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                   ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} 
                  `}
                placeholder="Type something..."
            />
          </div>
          <Button 
            type="submit"
            text={text}
            className={`w-full py-2 rounded-md transition duration-300
                ${theme === "dark" ? "bg-blue-700 hover:bg-blue-600 text-white" : "bg-slate-700 hover:bg-slate-600 text-white"}
              `}
          >
            Submit
          </Button>
        </form>
    </div>
}

export default Form