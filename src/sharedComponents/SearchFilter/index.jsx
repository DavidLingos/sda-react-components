import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import './index.css';

export default function SearchFilter({ values }) {
  let [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValue = searchParams.get('filter');

  useEffect(
    function () {
      if (defaultValue) {
        setInputValue(defaultValue);
      }
    },
    [defaultValue],
  );

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        defaultValue={defaultValue}
        onChange={function (event) {
          setInputValue(event.target.value);
        }}
      />

      <ul className="search">
        {values
          .filter((el) => el.toLowerCase().includes(inputValue.toLowerCase()))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}
