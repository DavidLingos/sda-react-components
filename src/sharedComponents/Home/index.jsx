import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNews } from '../../context/NewsContext';
import { useTheme } from '../../context/ThemeContext';
import Joke from '../Joke';
import PhoneInput from '../PhoneInput';
import ThemeButton from '../ThemeButton';

export default function Home() {
  const themeContext = useTheme();
  const newsContext = useNews();

  console.log(newsContext);

  console.log(themeContext);
  return (
    <div className={themeContext.theme === 'dark' ? 'bg-danger' : 'bg-warning'}>
      <PhoneInput />
      This is Home page <a href="/news">Go to news</a>
      <br />
      <Joke />
    </div>
  );
}
