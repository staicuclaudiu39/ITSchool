import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoSearch from "./components/ToDoSearch/ToDoSearch";
const App = () => {
  return (
    <div className="app">
      <ToDoSearch />
      <ToDoList />
    </div>
  );
};

export default App;
