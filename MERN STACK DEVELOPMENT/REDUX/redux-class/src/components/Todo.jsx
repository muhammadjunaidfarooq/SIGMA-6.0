import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone, todoSlice } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    console.log("Dlete", id);
    dispatch(deleteTodo(id));
  };

  const completeHandler = (id) => {
    dispatch(markAsDone(id))
  }

  return (
    <>
      <h3>Todos List App</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button
              onClick={() => {
                clickHandler(todo.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                completeHandler(todo.isDone);
              }}
            >
              Completed
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
