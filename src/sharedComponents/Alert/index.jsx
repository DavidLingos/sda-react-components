import React from 'react';
import { useParams } from 'react-router-dom';

function getClassNameFromColor(color) {
  if (color === 'green') {
    return 'alert-primary';
  }
  if (color === 'red') {
    return 'alert-danger';
  }
  if (color === 'orange') {
    return 'alert-warning';
  }
}

export default function Alert({ text, show, color }) {
  const params = useParams();

  return (
    <>
      {show && (
        <div className={`alert ${getClassNameFromColor(color)}`} role="alert">
          Toto je alert s ID: {params.id} <br />
          {text}
        </div>
      )}
    </>
  );
}
