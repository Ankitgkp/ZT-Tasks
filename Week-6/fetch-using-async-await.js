async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
    const data = await response.json()
    console.log(`Weather in ${city} : ${data.main.temp}°C, ${data.weather[0].description}`)
    console.error('api error');
  }
getWeather('Delhi')
