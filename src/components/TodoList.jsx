import React, { useState } from "react";
import AddButton from "../components/AddButton";
import Todo from "../components/Todo";
import DeleteButton from "./DeleteButton";
import "../components/TodoList.css";

// should come from the server, I use hardcoded data for this solution.
const todoListData = [
  "Go To Positions Class",
  "Buy New Robes",
  "Visit hagrid",
  "Read Book",
  "Run",
];

function TodoList(props) {
  const [tasks, setTasks] = useState(todoListData);
  const [todoIsHovering, setTodoIsHovering] = useState(false);
  const [newTodo, setNewTodo] = React.useState("");

  const handleTodoMouseOver = () => {
    setTodoIsHovering(true);
  };

  const handleTodoMouseOut = () => {
    setTodoIsHovering(false);
  };

  const handleDeleteTodo = (taskToDelete) => {
    if (tasks.length === 1) return;

    const indexOfTaskToDelete = tasks.indexOf(taskToDelete);
    console.log(indexOfTaskToDelete);
    if (indexOfTaskToDelete !== -1) {
      const tasksArray = [...tasks];
      tasksArray.splice(indexOfTaskToDelete, 1);
      setTasks(tasksArray);
    }
  };

  const handleAddTodo = () => {
    console.log(newTodo);
    console.log(newTodo.length);
    if (newTodo.length === 0) return;
    if (tasks.indexOf(newTodo) !== -1) return;

    setTasks([...tasks, newTodo]);
    setNewTodo("");
  };

  const handleAddTodoOnEnter = (e) => {
    if (e.key === "Enter") handleAddTodo();
  };

  return (
    <div className="todo-list">
      <div className="todo-list-title">
        <h1>To Do List</h1>
        <AddButton handleAddTodo={handleAddTodo} />
      </div>
      <div className="todo-list-input">
        <input
          type="text"
          value={newTodo}
          placeholder="Add New Todo"
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => handleAddTodoOnEnter(e)}
        />
      </div>
      <div className="tasks-container">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`todo-line ${
              todoIsHovering ? "show-delete-button" : ""
            }`}
            onMouseOver={handleTodoMouseOver}
            onMouseOut={handleTodoMouseOut}
          >
            <DeleteButton
              taskTodelte={task}
              handleDeleteTodo={handleDeleteTodo}
            />
            <Todo task={task} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
