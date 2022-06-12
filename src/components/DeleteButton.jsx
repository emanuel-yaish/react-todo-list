import React from "react";
import trashIcon from "../assets/trash.svg";
import "./DeleteButton.css";

function DeleteButton({ taskTodelte, handleDeleteTodo }) {
  return (
    <div
      onClick={() => handleDeleteTodo(taskTodelte)}
      className="delete-button"
    >
      <img className="delete-icon" src={trashIcon} alt="trash icon" />
    </div>
  );
}

export default DeleteButton;
