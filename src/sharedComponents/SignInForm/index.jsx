import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [remeberMe, setRemeberMe] = useState(false);

  return (
    <div>
      <input
        placeholder="Uživatelské jméno"
        onChange={function (event) {
          setUserName(event.target.value);
        }}
      />
      <input
        placeholder="Heslo"
        type="password"
        onChange={function (event) {
          setPassword(event.target.value);
        }}
      />
      Zapamatuj si mě{' '}
      <input
        type="checkbox"
        onChange={function (event) {
          setRemeberMe(event.target.checked);
        }}
      />
      <button
        onClick={function () {
          // fetch("http://localhost:3001/signin", {
          //   method: "POST",
          //   body: {
          //     jmeno: userName,
          //     heslo: password,
          //   }
          // })
          //   .then(response => { })// Úspěšné přihlášení)
          //   .catch(response => { })// Neúspěšné přihlášení)
          navigate('/');
        }}>
        Přihlásit se
      </button>
    </div>
  );
}
