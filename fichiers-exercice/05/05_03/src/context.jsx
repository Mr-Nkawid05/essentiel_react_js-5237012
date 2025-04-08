import { createContext, useState, useCallback, useMemo, useEffect } from 'react';

const TodosContext = createContext();


const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  // Add a new todo (memoized)
  const addTodo = useCallback(() => {

    if (newTodo.trim() === "") return;
    setTodos(prev => [...prev, { text: newTodo, completed: false }]);
    setNewTodo("");
  }, [setTodos, setNewTodo]);

  // Toggle completed status (memoized)
  const toggleTodo = useCallback(index => {
    setTodos(prev =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, [setTodos]);

  // useEffect(() => {
  //   const completed = !showCompleted ? todos : todos.filter(todo => todo.completed)
  //   setVisibleTodos(completed)
  // }, [showCompleted, todos])

  // Filtered todos (memoized)
  const visibleTodos = useMemo(() => {
    return !showCompleted ? todos : todos.filter(todo => todo.completed)
  }, [showCompleted, todos])

  const todosCount = useMemo(() => {
    return todos.length > 0 ? todos.length + " todos" : ""
  }, [todos])

  // 2. définir useEffect pour sauvegarder en local
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return <TodosContext.Provider value={{ todos, newTodo, addTodo, showCompleted, setShowCompleted, toggleTodo, visibleTodos, todosCount }}>{children}</TodosContext.Provider>
}

export default TodosProvider