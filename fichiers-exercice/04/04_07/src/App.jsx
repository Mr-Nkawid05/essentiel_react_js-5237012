import { useState, useEffect, useMemo, useCallback } from 'react'
import TodoList from "./TodoList";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function Header() {
  return <><h1>Todo List</h1><hr /></>
}

/* 
1. créer variable d'état pour gérer la liste de todo restant à compléter
2. afficher le total de todos restant à compléter
3. économiser sur les performances en évitant les recalculs et opérations inutiles
4. respecter les règles de hooks (https://react.dev/warnings/invalid-hook-call-warning)
*/

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [visibleTodos, setVisibleTodos] = useState(todos)
  const [showCompleted, setShowCompleted] = useState(true);

  // Add a new todo (memoized)
  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos(prev => [...prev, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  // Toggle completed status (memoized)
  const toggleTodo = (index => {
    setTodos(prev =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  });

  // Filtered todos (memoized)


  // 2. définir useEffect pour sauvegarder en local
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <div style={{ padding: "1rem", maxWidth: 500 }}>


      <input
        type="text"
        value={newTodo}
        placeholder="Add a new task..."
        onChange={e => setNewTodo(e.target.value)}
        onKeyDown={e => e.key === "Enter" && addTodo()}
      />
      <button onClick={addTodo}>Add</button>

      <div style={{ marginTop: "1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(sc => !sc)}
          />
          Show completed
        </label>
      </div>

      <TodoList todos={visibleTodos} onToggle={toggleTodo} />
    </div>
  );
}
const App = () => {
  return (
    <div className="container mt-5">
      <Header />
      <TodoApp />
    </div>
  );
};

export default App
