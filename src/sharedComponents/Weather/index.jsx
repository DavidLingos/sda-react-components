import React, { useState } from 'react';
import { isEmpty } from '../../utils/validations';
import DisplayWeather from './DisplayWeather';

import './index.css';

export default function Weather() {
  const [weatherData, setWeatherData] = useState();
  const [formData, setFormData] = useState({
    city: '',
    country: '',
  });
  const [cityErrorMessage, setCityErrorMessage] = useState();
  const [countryErrorMessage, setCoutryErrorMessage] = useState();

  function loadWeather() {
    if (isEmpty(formData.city) || !isNaN(formData.city)) {
      setCityErrorMessage('Vyplň město');
      return;
    }
    setCityErrorMessage(undefined);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formData.city},${formData.country}&appid=86d5e1d08dc16532df94b4f5ce697faf`)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.cod === 200) {
          setWeatherData(responseData);
        } else {
          alert('Lokace nebyla nalezena!');
        }
      })
      .catch(() => alert('Server není momentálně dostupný!'));
  }

  return (
    <div className="weather">
      <h1>Weather App</h1>

      <div>
        <input
          type="text"
          placeholder="City"
          onChange={(e) =>
            setFormData({
              ...formData,
              city: e.target.value,
            })
          }
          className={cityErrorMessage ? 'text-danger' : ''}
        />
      </div>
      <input
        type="text"
        placeholder="Country"
        onChange={(e) =>
          setFormData({
            ...formData,
            country: e.target.value,
          })
        }
      />
      <button onClick={loadWeather}>Submit</button>
      {cityErrorMessage && <p className="text-danger">{cityErrorMessage}</p>}
      {weatherData !== undefined && <DisplayWeather data={weatherData} />}
    </div>
  );
}
