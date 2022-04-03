import React from 'react';
import { useParams } from 'react-router-dom';
import { useNews } from '../../context/NewsContext';

export default function NewsDetail() {
  const params = useParams();

  const newsContext = useNews();

  console.log(newsContext);

  return <div>Toto je detail novinky {params.id}</div>;
}
