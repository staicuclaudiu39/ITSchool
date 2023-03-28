import React from "react";
import "./ToDoSearch.css";

const ToDoSearch = () => {
  return (
    <form className="search-container">
      <input className="search-input" />
      <button className="search-button">Add ToDo</button>
    </form>
  );
};

export default ToDoSearch;
