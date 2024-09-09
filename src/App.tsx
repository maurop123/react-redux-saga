import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosFetch } from './store/actions/todoAction.ts'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Tiles } from './features/tiles/Tiles.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todoReducer.todos)

  return (
    <div className="h-full flex flex-col justify-between">
      <h1>Vite + React</h1>
      <div className="card">
        <Tiles />
        <button onClick={() => dispatch(getTodosFetch())}>
          Get Todos 
        </button>
        <ul>
          {todos.filter((t,i) => i % 10 === 0).map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
