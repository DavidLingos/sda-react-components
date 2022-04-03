import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNews } from '../../context/NewsContext';
import { ThemeContext } from '../../context/ThemeContext';
import NewsDetail from '../NewsDetail';

export default function News() {
  const newsContext = useNews();

  console.log(newsContext);
  return (
    <div>
      This is News page
      <NewsDetail />
      <NewsDetail />
      {/* <a href="/">Go to home</a> */}
      <Link to="/news/5000">Novinka 1</Link>
      <Link to="/news/2">Novinka 2</Link>
      <Link to="/news/3">Novinka 3</Link>
    </div>
  );
}
