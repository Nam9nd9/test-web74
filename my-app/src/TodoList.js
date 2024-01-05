import React, { useEffect, useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useTodoContext } from "./context";

const TodoList = () => {
  const todoList = [
    { id: 1, title: "Build some websites", isComplated: false },
    { id: 2, title: "Do exercises", isComplated: false },
    { id: 3, title: "Go shopping", isComplated: false },
    { id: 4, title: "House cleaning", isComplated: true },
  ];
  
  const [todos, setTodos] = useState(todoList);
  const {addTodo ,haveToComplate, setHaveToComplate } = useTodoContext();
  

  const handleToggleDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplated: !todo.isComplated } : todo
    );
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const num = todos.filter((todo) => !todo.isComplated).length;
    setHaveToComplate(num);
  }, [todos, setHaveToComplate]);
  console.log(addTodo);
  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item-container ${todo.isComplated ? "done" : ""}`}
        >
          {todo.isComplated ? (
            <FaRegCheckCircle
              color="#9a9a9a"
              className="item-done-button"
              onClick={() => handleToggleDone(todo.id)}
            />
          ) : (
            <FaRegCircle
              color="#9a9a9a"
              className="item-done-button"
              onClick={() => handleToggleDone(todo.id)}
            />
          )}
          <div className="item-title">{todo.title}</div>
        </div>
      ))}
      <div>{haveToComplate}</div>
    </div>
  );
};

export default TodoList;
