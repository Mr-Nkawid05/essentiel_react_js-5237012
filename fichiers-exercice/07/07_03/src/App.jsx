import { use, Suspense } from 'react'
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
      <p className='h2 text-primary'>Todo List</p><hr />
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
  return <div className="card p-3" style={{ width: '18rem' }}>
    <>
      <h5 className="card-title placeholder-glow">
        <span className="placeholder col-6"></span>
      </h5>
      <p className="card-text placeholder-glow">
        <span className="placeholder col-4"></span>
      </p>
      <p className="card-text placeholder-glow">
        <span className="placeholder col-8"></span>
      </p>
    </>
  </div>
}
const App = () => {
  const weatherPromise = fetchWeather("London")

  return (
    <div className="container d-flex justify-content-around align-items-center vh-100 vw-50">
      <Suspense fallback={<Loading />}>
        <WeatherComponent weatherPromise={weatherPromise} />
      </Suspense>
      <TodoApp />
    </div >
  );
};

export default App
