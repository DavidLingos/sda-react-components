import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [newTodoName, setNewTodoName] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  function submitForm() {
    if (!newTodoName) {
      alert('Zadej název úkolu.');
    }

    // Kopie pole pomocí tří teček.
    const newTodoArray = [...todoArray];
    newTodoArray.push({
      name: newTodoName,
      isDone: false,
    });
    setTodoArray(newTodoArray);
  }

  const markTodo = (index) => {
    const newTodoArray = [...todoArray];
    newTodoArray[index].isDone = true;
    setTodoArray(newTodoArray);
  };

  const removeTodo = (index) => {
    const newTodoArray = [...todoArray];
    newTodoArray.splice(index, 1);
    setTodoArray(newTodoArray);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <div>
          <div class="form-group">
            <label class="form-label">
              <b>Add Todo</b>
            </label>
            <input onChange={(e) => setNewTodoName(e.target.value)} placeholder="Add new todo" type="text" className="input form-control" />
          </div>
          <button className="btn btn-primary mb-3" onClick={submitForm}>
            Submit
          </button>
        </div>
        <div>
          {todoArray.map((todo, index) => (
            <div>
              <TodoItem key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
