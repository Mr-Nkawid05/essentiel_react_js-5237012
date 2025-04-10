import axios from 'axios';

export const fetchWeather = (city) => {
  return axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_APP_API_KEY}&units=metric`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching weather:', error);
      throw error
    })
}
