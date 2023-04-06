import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoSearch from "./components/ToDoSearch/ToDoSearch";
import { todos } from "./utilis/todos";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState();

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="app">
      <ToDoSearch updateValue={updateValue} />
      <ToDoList myTodos={todos} searchValue={value} />
    </div>
  );
};

export default App;
