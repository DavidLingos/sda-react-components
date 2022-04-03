import React, { useState } from 'react';

export default function MyButton({ buttonName, color, disableCounter }) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={function () {
          // window.alert(`Bylo kliknuto na tlačítko: ${buttonName}`);
          setCounter(counter + 1);

          //setShowText(showText ? false : true);

          //showText ? setShowText(false) : setShowText(true);

          // if (showText) {
          //   setShowText(false);
          // } else {
          //   setShowText(true);
          // }
        }}
        style={{ backgroundColor: color }}>
        {buttonName}
      </button>
      {disableCounter && <div>Počet kliků {counter}</div>}
    </div>
  );
}
