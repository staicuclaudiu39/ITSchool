import "./App.css";
import Table from "./components/Table/Table";
import TableSearch from "./components/TableSearch/TableSearch";
import { useState } from "react";
import { groceries } from "./utilis/list";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState(groceries);

  const updateValue = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="App">
      <TableSearch updateValue={updateValue} />
      <Table searchValue={searchValue} list={list} />
    </div>
  );
}

export default App;
