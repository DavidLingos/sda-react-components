import React from 'react';
import MyButton from '../MyButton';

export default function MyButtonsList({ buttonsCount, disableCounters }) {
  const buttons = [];
  for (let i = 0; i < buttonsCount; i++) {
    buttons.push(<MyButton buttonName={'Tlačítko' + (i + 1)} disableCounter={disableCounters} />);
  }

  return buttons;
}
