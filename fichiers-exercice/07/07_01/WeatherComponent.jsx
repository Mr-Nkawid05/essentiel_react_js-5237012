import { use } from 'react';

export function WeatherComponent({ weatherData }) {
  return <div className="card mb-5">
    <p>Temp: {weatherData?.main?.temp}°C</p>
    <p>Condition: {weatherData?.weather[0].description}</p>
  </div>
}