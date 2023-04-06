import React from "react";
import { todos } from "../../utilis/todos";
import {
  useState,
  useRef,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";

import styled from "styled-components";
const TodoContainer = styled.div`
  width: 100%;
  padding-left: 0px;
`;

const TodoItem = styled.div`
  background-color: darkcyan;
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
`;

const ToDoList = ({ myTodos, searchValue }) => {
  const [list, setList] = useState(todos);
  const auxListRef = useRef(list);

  const myRef = useRef();

  const todosCompletedCount = useMemo(() => {
    return list?.filter((todo) => todo.completed)?.length;
  }, [list]);

  // const { myValue, setMyValue } = useContext(myContext);

  const filterTodos = () => {
    return auxListRef.current?.filter((todo) =>
      todo.title.includes(searchValue)
    );
  };

  useEffect(() => {
    const filteredTodos = filterTodos();
    setList(filteredTodos);
  }, [searchValue]);

  useEffect(() => {
    console.log("todosConpletedCount " + todosCompletedCount);
  }, [todosCompletedCount]);

  const deleteItem = (id) => {
    myRef.current?.focus();
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const getTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        auxListRef.current = json;
        setList(json);
      });
  };

  const getUsers = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const respone = await users.json();

    return respone;
  };

  const parseResponse = (users) => {
    return users.map((user) => {
      const parsedUsername = user.name + user.email + user.username;
      const parsedGeoLocation = user.address.geo.lat + user.address.geo.lng;

      return { ...user, parsedUsername, parsedGeoLocation };
    });
  };

  const sortedResponse = (users) => {
    return users.sort((a, b) => (b.name > a.name ? -1 : 1));
  };

  const handleUsers = async () => {
    const users = await getUsers();
    const parsedResponse = await parseResponse(users);
    const sortedUsers = sortedResponse(parsedResponse);

    return sortedUsers;
  };

  useEffect(() => {
    getTodos();
  }, []);

  const anotherComponent = useCallback(() => {
    return <div>another component</div>;
  }, [list]);

  return (
    <TodoContainer>
      <div className="list">
        {list.map((todo) => (
          <>
            <TodoItem key={todo.id}>{todo.title}</TodoItem>
            <button onClick={() => deleteItem(todo.id)}>delete</button>
          </>
        ))}
        <input ref={myRef} />
      </div>
    </TodoContainer>
  );
};

export default ToDoList;
