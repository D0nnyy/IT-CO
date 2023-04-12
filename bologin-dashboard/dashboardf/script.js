const apiKey = '3803aa760d1beaccfbe87ec6f1e141fe';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // update the temperature
    const tempEl = document.querySelector('.temp');
    tempEl.textContent = `${data.main.temp}°C`;

    // update the description
    const descEl = document.querySelector('.description');
    descEl.textContent = data.weather[0].description;

    // update the min and max temperatures
    const minTempEl = document.querySelector('.min-temp');
    minTempEl.textContent = `${data.main.temp_min}°C`;
    const maxTempEl = document.querySelector('.max-temp');
    maxTempEl.textContent = `${data.main.temp_max}°C`;

    // update the humidity
    const humidityEl = document.querySelector('.humidity');
    humidityEl.textContent = `${data.main.humidity}%`;

    // update the pressure
    const pressureEl = document.querySelector('.pressure');
    pressureEl.textContent = `${data.main.pressure} hPa`;

    // update the wind speed and direction
    const windSpeedEl = document.querySelector('.wind-speed');
    windSpeedEl.textContent = `${data.wind.speed} m/s`;
    const windDirectionEl = document.querySelector('.wind-direction');
    windDirectionEl.textContent = `${data.wind.deg}°`;

    // update the sunrise and sunset times
    const sunriseEl = document.querySelector('.sunrise');
    sunriseEl.textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetEl = document.querySelector('.sunset');
    sunsetEl.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  })
  
  .catch(error => {
    console.log(`An error occurred while fetching the data: ${error}`);
  });