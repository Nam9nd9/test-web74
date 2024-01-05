import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
  const [haveToComplate, setHaveToComplate] = useState('0');
  const addTodo = (newTodo) => {
    setTodos(newTodo);
  };

  const value = {
    todos,setTodos,
    haveToComplate,
    setHaveToComplate,
    addTodo
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};