import { use } from 'react';

export function WeatherComponent({ weatherData }) {
  if (!weatherData) return <p className="text-info">No Data Available - Check your Internet Connection 🌐</p>
  return <div className="card mb-5">
    <p className='h2 text-info'>Weather Forecast</p><hr />
    <p>Temp: {weatherData?.main?.temp}°C</p>
    <p>Condition: {weatherData?.weather[0].description}</p>
  </div>
}