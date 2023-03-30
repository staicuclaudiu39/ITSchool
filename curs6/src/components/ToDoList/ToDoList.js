import React from "react";
import "./ToDoList.css";
import { todos } from "../../utilis/todos";
import { useState, useRef, useEffect, useContext } from "react";

const ToDoList = (myTodos) => {
  const [list, setList] = useState(todos);

  const myRef = useRef();

  useEffect(() => {
    console.log("changed");
  }, [list]);

  // const { myValue, setMyValue } = useContext(myContext);

  const deleteItem = (id) => {
    myRef.current?.focus();
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div className="list">
      {list.map((todo) => (
        <>
          <div className="item" key={todo.id}>
            {todo.title}
          </div>
          <button onClick={() => deleteItem(todo.id)}>delete</button>
        </>
      ))}
      <input ref={myRef} />
    </div>
  );
};

export default ToDoList;
