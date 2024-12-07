import React from 'react'
import { ThemeContextProvider, TodoProvider } from './contexts'
import { Form, Todos } from './components'

const App = () => {
  return (
    <div>
        <ThemeContextProvider>
            <TodoProvider>
                <Form></Form>
                <Todos></Todos>
            </TodoProvider>
        </ThemeContextProvider>
    </div>
  )
}

export default App