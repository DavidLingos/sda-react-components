import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setNewsDetail, getNewsDetail } from '../../serverMock';

export default function NewsEditForm() {
  const params = useParams();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(
    function () {
      getNewsDetail(params.id)
        .then(function (response) {
          if (response !== undefined) {
            setTitle(response.title);
            setText(response.text);
          }
        })
        .catch(function () {
          console.log('Nastala chyba!');
        });
    },
    [params.id],
  );

  return (
    <div>
      <input
        placeholder="Titulek"
        onChange={function (event) {
          setTitle(event.target.value);
        }}
        value={title}
      />
      <input
        placeholder="Text"
        onChange={function (event) {
          setText(event.target.value);
        }}
        value={text}
      />
      <button
        onClick={function () {
          setNewsDetail({
            id: params.id,
            text: text,
            title: title,
          });
        }}>
        Uložit
      </button>
    </div>
  );
}
