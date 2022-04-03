import React, { useEffect } from 'react';

export default function Greet({ name }) {
  useEffect(
    function callback() {
      document.title = `Hello, ${name}`;
    },
    [name],
  );

  return <div>Hello, {name}</div>;
}
