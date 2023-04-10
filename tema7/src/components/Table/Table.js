import React from "react";
import ReactDOM from "react-dom";
import "./Table.css";
import { groceries } from "../../utilis/list";
import { useState, useEffect, useRef, useContext } from "react";

const Table = ({ searchValue = "" }) => {
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
    if (list != groceries) {
      setCircleColor("red");
    } else {
      setCircleColor("darkorange");
    }
  }, [list]);

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
      </div>
    </>
  );
};

export default Table;
