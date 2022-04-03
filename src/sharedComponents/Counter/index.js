import React, { useState } from 'react';

function Counter() {
  const state = useState(0);
  const counter = state[0];
  const setCounter = state[1];

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter - 1)}>Decrease counter</button>
      <button onClick={() => setCounter(counter + 1)}>Increase counter</button>
    </div>
  );
}

export default Counter;
