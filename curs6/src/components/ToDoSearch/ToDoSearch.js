import React from "react";
import "./ToDoSearch.css";

const ToDoSearch = ({ updateValue }) => {
  const onChange = (event) => {
    console.log("event " + event?.target?.value);
    updateValue(event?.target?.value);
  };

  return (
    <form className="search-container">
      <input className="search-input" onChange={onChange} />
      <button className="search-button">Add ToDo</button>
    </form>
  );
};

export default ToDoSearch;
