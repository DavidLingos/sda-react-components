import React from 'react';

export default function TodoItem({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>{todo.name}</span>
      <div>
        <button className="btn btn-outline-success" onClick={() => markTodo(index)}>
          ✓
        </button>{' '}
        <button className="btn btn-outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </button>
      </div>
    </div>
  );
}
