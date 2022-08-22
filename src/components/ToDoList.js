import React, { useState } from "react";
import "./ToDoList.css";
import { BsX } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ToDoList = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addToList();
    }
  };

  const handleDelete = (idToDelete) => {
    setTodo(todo.filter((element) => element.id !== idToDelete));
  };

  const addToList = () => {
    const id = new Date().getTime().toString();
    const item = {
      id: id,
      subject: text,
    };
    setTodo([...todo, item]);
    setText("");
  };

  return (
    <>
      <div className="inputContainer">
        <label htmlFor="taskInput" className="inputLabel">
          Task:
        </label>
        <input
          name="taskInput"
          className="inputField"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="addButton"
          disabled={text.trim() === ""}
          onClick={addToList}
        >
          Add
        </button>
      </div>
      {todo.length > 0 ? (
        <div className="listContainer">
          <ul className="todoList">
            {todo.map((item) => (
              <li className="listItem" key={item.id}>
                <div className="listItemContent">
                  <span>{item.subject}</span>
                  <FontAwesomeIcon
                    icon={faTimes}
                    size={"lg"}
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>There is nothing to do. {":)"}</p>
      )}
    </>
  );
};

export default ToDoList;
