import React from "react";
import "./ToDoList.css";
import { todos } from "../../utilis/todos";
const ToDoList = () => {
  return (
    <div className="list">
      {todos.map((todo) => (
        <div className="item" key={todo.id}>
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
