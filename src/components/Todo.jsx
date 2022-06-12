import React from "react";
import "./Todo.css";

function Todo({ task }) {
  return <div className="todo">{task}</div>;
}

export default Todo;
