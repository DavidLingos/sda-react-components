import React from 'react';

export default function DisplayWeather({ data }) {
  console.log(data);
  return (
    <div>
      <h2>
        {data.name}, {data.sys.country}
      </h2>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  );
}
