import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table';
import TableSearch from './components/TableSearch/TableSearch';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState();
  
  const updateValue = (value) => {
    setSearchValue(value);
  }

  return (
    <div className="App">
      <TableSearch updateValue={updateValue} />
      <Table searchValue={searchValue} />
    </div>
  );
}

export default App;
