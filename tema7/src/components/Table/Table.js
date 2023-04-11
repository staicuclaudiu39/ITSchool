import React, { useState, useEffect, useRef } from "react";
import "./Table.css";
import { groceries } from "../../utilis/list";

const Table = ({ searchValue = "", addItem }) => {
  const [list, setList] = useState(groceries);
  const [circleColor, setCircleColor] = useState("darkorange");
  const auxListRef = useRef(list);

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const filterList = () => {
    return auxListRef.current?.filter((list) =>
      list.name.includes(searchValue)
    );
  };

  useEffect(() => {
    const filteredList = filterList();
    setList(filteredList);
  }, [searchValue]);

  const sortList = () => {
    const sortedList = list
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    setList(sortedList);
  };

  useEffect(() => {
    if (list.length !== groceries.length) {
      setCircleColor("green");
    } else {
      setCircleColor("darkorange");
    }
  }, [list]);

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = { id: list.length + 1, name: event.target[0].value };
    setList([...list, newItem]);
    event.target[0].value = "";
  };

  return (
    <>
      <div className="circle" style={{ backgroundColor: circleColor }}></div>
      <div className="sort-container">
        <button className="sort" onClick={sortList}>
          Sort
        </button>
      </div>
      <div className="Table">
        <table>
          <tr>
            <th>Lista de cumparaturi</th>
          </tr>
          {list.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  {item.name}{" "}
                  <button onClick={() => deleteItem(item.id)}>Cumparat</button>
                </td>
              </tr>
            );
          })}
        </table>
        <form onSubmit={handleAddItem}>
          <input type="text" placeholder="Add Item" />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default Table;
