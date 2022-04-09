import React, { useState } from 'react';

export default function NewTodoForm() {
  const [value, setValue] = useState('');

  const submitForm = (e) => {
    if (!value) {
      alert('Zadej název úkolu.');
    }
  };

  return (
    <div>
      <div class="form-group">
        <label class="form-label">
          <b>Add Todo</b>
        </label>
        <input onChange={(e) => setValue(e.target.value)} placeholder="Add new todo" type="text" className="input form-control" />
      </div>
      <button className="btn btn-primary mb-3" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}
