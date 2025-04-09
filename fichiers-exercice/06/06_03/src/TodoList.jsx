import React, { use } from "react";
import { TodosContext } from "./context";

const TodoList = React.memo(() => {
  const { visibleTodos: todos, toggleTodo: onToggle } = use(TodosContext)
  // const { visibleTodos, toggleTodo } = useContext(TodosContext)
  console.log("Rendering TodoList...");

  return (
    <ul style={{ marginTop: "1rem" }}>
      {todos.map((todo, index) => (
        <li
          key={index}
          onClick={() => onToggle(index)}
          style={{
            cursor: "pointer",
            textDecoration: todo.completed ? "line-through" : "none",
          }}
          className={todo.completed ? 'text-secondary' : ''}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
