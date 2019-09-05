import React from "react";

const Todo = props => {
  return (
    <div
      className={`todo${props.todo.completed ? " completed" : ""}`}
      onClick={() => {
        props.toggleTodo(props.todo.id);
      }}
    >
      <h1>{props.todo.task}</h1>
    </div>
  );
};

export default Todo;
