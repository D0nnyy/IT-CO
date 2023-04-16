const apiKey = '3803aa760d1beaccfbe87ec6f1e141fe';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=${apiKey}`;

const dataUrl = 'https://31910.hosts1.ma-cloud.nl/duurzaamhuis/post.php';

fetch(dataUrl)
  .then(response => response.json())
  .then(data => {
    // extract the temperature data and round to one decimal place
    const temperature = parseFloat(data['Temp']).toFixed(1);

    // update the temperature element
    const tempEl = document.querySelector('.temp');
    tempEl.innerHTML = `${temperature} °C`;

    // extract the humidity data and round to one decimal place
    const humidity = parseFloat(data['Humidity']).toFixed(1);

    // update the humidity element
    const humidityEl = document.querySelector('.humidity');
    humidityEl.innerHTML = `${humidity} %`;

    // extract the light level data
    const lightLevel = parseInt(data['lichtHoeveelheid']);

    // update the light level element
    const lightLevelEl = document.querySelector('.light-amount');
    lightLevelEl.innerHTML = `${lightLevel} %`;

    

    // extract the LED status data
    const led1Status = parseInt(data['Led1']);
    const led2Status = parseInt(data['Led2']);
    const led3Status = parseInt(data['Led3']);

    // update the LED status elements
    const led1El = document.querySelector('.led1');
    const led2El = document.querySelector('.led2');
    const led3El = document.querySelector('.led3');

    led1El.innerHTML = led1Status ? 'On' : 'Off';
    led2El.innerHTML = led2Status ? 'On' : 'Off';
    led3El.innerHTML = led3Status ? 'On' : 'Off';
  })
  .catch(error => {
    console.log(`An error occurred while fetching the data: ${error}`);
  });

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {

    // update the min and max temperatures
    const minTempEl = document.querySelector('.min-temp');
    minTempEl.textContent = `${data.main.temp_min}°C`;
    const maxTempEl = document.querySelector('.max-temp');
    maxTempEl.textContent = `${data.main.temp_max}°C`;

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