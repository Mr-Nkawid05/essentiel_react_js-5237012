import { useState, use, useEffect, useTransition } from 'react'
import { TodosContext } from './context';
import TodoList from "./TodoList";
import { WeatherComponent } from './WeatherComponent.jsx';
import { fetchWeather } from './lib.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function TodoApp() {
  const { newTodo, addTodo, showCompleted, setNewTodo, setShowCompleted, toggleTodo, visibleTodos, todosCount } = use(TodosContext)
  return (
    <div className='card' style={{ padding: "1rem", maxWidth: 500 }}>
      {/* <p>{todosCount}</p> */}
      <div className='d-flex'>
        <input
          type="text"
          value={newTodo}
          placeholder="Add a new task..."
          className='form-control'
          onChange={e => setNewTodo(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo} className='btn btn-dark btn-sm mx-1'>Add</button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(sc => !sc)}
          />
          &nbsp; Show completed
        </label>
      </div>

      <TodoList todos={visibleTodos} onToggle={toggleTodo} />
    </div >
  );
}

const Loading = () => {
  return <p className='text-info'>Loading ...</p>
}
const App = () => {
  const [weather, setWeather] = useState(null)
  const [isPending, startTransition] = useTransition()
  useEffect(() => {
    // startTransition
    startTransition(async () => {
      const weather = await fetchWeather("London")
      setWeather(weather)
    })
  }, [])
  return (
    <div className="container mt-5">
      {isPending ? <Loading /> : <WeatherComponent weatherData={weather} />}
      <TodoApp />
    </div >
  );
};

export default App
