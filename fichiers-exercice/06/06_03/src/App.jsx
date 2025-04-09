import { use } from 'react'
import { TodosContext } from './context';
import TodoList from "./TodoList";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function TodoApp() {
  const { newTodo, addTodo, showCompleted, setNewTodo, setShowCompleted } = use(TodosContext)
  return (
    <div className="card p-5 border-primary" style={{ padding: "1rem", maxWidth: 500 }}>
      <><h1 className='text-primary'>Todo List</h1><hr /></>
      <div className='d-flex'>
        <input
          type="text"
          value={newTodo}
          placeholder="Add a new task..."
          onChange={e => setNewTodo(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addTodo()}
        />
        <button className="btn btn-primary btn-sm mx-1" onClick={addTodo}>Add</button>
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
      <TodoList />
    </div>
  );
}
const App = () => {
  return (
    <div className="container mt-5">
      <TodoApp />
    </div>
  );
};

export default App
