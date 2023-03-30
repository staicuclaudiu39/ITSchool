import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoSearch from "./components/ToDoSearch/ToDoSearch";
import { todos } from "./utilis/todos";

const App = () => {
  return (
    <div className="app">
      <ToDoSearch />
      <ToDoList myTodos={todos} />
    </div>
  );
};

export default App;
