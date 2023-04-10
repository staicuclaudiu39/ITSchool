import React from "react";
import "./TableSearch.css";

const TableSearch = ({ updateValue }) => {
  const onChange = (event) => {
    console.log("event " + event?.target?.value);
    updateValue(event?.target?.value);
  };

  return (
    <form className="search-container">
      <input className="search-input" onChange={onChange} />
      <button className="search-button">Search Item</button>
    </form>
  );
};

export default TableSearch;