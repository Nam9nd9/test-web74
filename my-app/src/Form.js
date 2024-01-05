import React, { useState } from 'react';
import { useTodoContext } from './context';
const Form = () => {
  const { addTodo } = useTodoContext();
  const [newTodo, setNewTodo] = useState('');
  const handleSubmit = () => {
    console.log(newTodo);
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: new Date().getTime(),
        title: newTodo,
        isComplated: false,
      };

      addTodo(newTodoItem);
      setNewTodo('');
    }
  };
    return (
      <form className="form">
        <input placeholder="Enter task ..." type='text' onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  };
  
  export default Form;
  