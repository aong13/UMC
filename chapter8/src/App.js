import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import a separate CSS file for styling

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const searchWeather = async () => {
    try {
      setError(null);
      setWeather(null);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27d7273e2ae146f0b079900c49941eb9`
      );
      setWeather(response.data);
    } catch (error) {
      setError('에러가 발생했습니다');
    }
  };

  useEffect(() => {
    searchWeather();
  }, []);
  
  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchWeather();
    }
  };
  return (
    <div className='container'>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        onKeyPress={handleEnterKeyPress}
        placeholder='도시를 입력하세요'
      />
      {weather && (
        <div className="weather-box">
          <p className='city'>{weather.name}</p>
          <p className='temp'>{Math.round(((weather.main.temp - 273.15) * 10)) / 10}°C </p>
          <p className='weather'>{weather.weather[0].description}</p>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}

export default Weather;
