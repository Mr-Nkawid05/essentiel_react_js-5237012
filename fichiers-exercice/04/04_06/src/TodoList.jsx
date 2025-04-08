import React from "react";

const TodoList = React.memo(({ todos, onToggle }) => {
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
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
