import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [list, setList] = useState([
    { task: "sample task", id: uuidv4(), status: false },
  ]);
  let [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== "") {
      setList((prevTodos) => {
        return [...prevTodos, { task: taskName, id: uuidv4() }];
      });
      setTaskName("");
    }
  };

  let updateTodoValue = (event) => {
    setTaskName(event.target.value);
  };

  let deleteTodo = (id) => {
    setList((prevTodos) => list.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setList((prevTodos) =>
      prevTodos.map((item) => {
        return {
          ...item,
          task: item.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseTodo = (id) => {
    setList((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, task: item.task.toUpperCase() } : item
      )
    );
  };

  let taskDone = (id) => {
    setList((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, status: true } : item
      )
    );
  };

  let doneAllTasks = () => {
    setList((prevTodos) =>
      prevTodos.map((item) => {
        return {
          ...item,
          status: true,
        };
      })
    );
  };

  return (
    <div>
      <h3>To Do List</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          placeholder="Enter a todo.."
          onChange={updateTodoValue}
        />
        <br />
        <br />
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            style={{
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                textDecoration: item.status ? "line-through" : "none",
              }}
            >
              {" "}
              {item.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => upperCaseTodo(item.id)}>
              UpperCase One
            </button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => taskDone(item.id)}>Task Done</button>
          </li>
        ))}
      </ul>
      <button onClick={doneAllTasks}>All Tasks Done</button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </div>
  );
}
