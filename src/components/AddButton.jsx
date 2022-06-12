import React from "react";
import "./AddButton.css";

function AddButton({ handleAddTodo }) {
  return (
    <button className="add-todo" onClick={handleAddTodo}>
      +
    </button>
  );
}

export default AddButton;
