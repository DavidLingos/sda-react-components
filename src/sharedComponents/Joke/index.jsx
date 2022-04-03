import React, { useEffect, useState } from 'react';

function getJoke() {
  return fetch('https://api.chucknorris.io/jokes/random', {
    method: 'GET',
  });
}

export default function Joke() {
  const [iconUrl, setIconUrl] = useState();
  const [joke, setJoke] = useState('');

  useEffect(function () {
    getJoke()
      .then((response) => {
        response.json().then((data) => {
          setJoke(data.value);
          setIconUrl(data.icon_url);
        });
      })
      .catch(() => setJoke('Nelze načíst vtip'));
  }, []);

  return (
    <div>
      {iconUrl && <img src={iconUrl} />}
      {joke}
    </div>
  );
}
