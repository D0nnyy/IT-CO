const apiKey = '3803aa760d1beaccfbe87ec6f1e141fe';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=${apiKey}`;


fetch("https://api.openweathermap.org/data/2.5/weather?q=amsterdam&appid=3803aa760d1beaccfbe87ec6f1e141fe&mode=json&units=metric&lang=nl")
  .then(response => response.json())
  .then(data => {
    // update de temperatuur
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
  });

// update the clock every second
setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // add leading zeros to minutes and seconds
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // update the clock
  document.getElementById('clock').textContent = `${hours}:${formattedMinutes}:${formattedSeconds}`;
}, 1000);


const tempEl = document.querySelector('.temp');
const descEl = document.querySelector('.description');
const minTempEl = document.querySelector('.min-temp');
const maxTempEl = document.querySelector('.max-temp');
const humidityEl = document.querySelector('.humidity');
const pressureEl = document.querySelector('.pressure');
