import React, { useState } from 'react';

export default function PhoneInput() {
  const [phone, setPhone] = useState();
  const [errorMessage, setErrorMessage] = useState();

  function validatePhoneNumber() {
    fetch(`https://api.veriphone.io/v2/verify?phone=${phone}&key=9E2ABBC635534240938B1886027F3376`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.phone_valid) {
          alert('Invalid phone number');
        } else {
          alert('Valid phone number');
        }
      });
  }

  return (
    <div>
      <input type="text" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} />
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <button onClick={validatePhoneNumber}>Validate</button>
    </div>
  );
}
