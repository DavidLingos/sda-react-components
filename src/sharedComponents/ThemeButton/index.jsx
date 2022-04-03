import React, { useContext } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeButton() {
  const themeContext = useTheme();

  return (
    <button
      onClick={function () {
        themeContext.setTheme(themeContext.theme === 'dark' ? 'light' : 'dark');
      }}>
      Změň design
    </button>
  );
}
