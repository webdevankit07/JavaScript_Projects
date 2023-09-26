const weatherDataEl = document.getElementById('weather-data');
const errorInfoEl = document.getElementById('error-info');
const cityInputEl = document.getElementById('city-input');
const submitEl = document.getElementById('submit');
const formEl = document.querySelector('form');
const apiKey = `04362290fe5a99a6c43df0d89f9d482d`;
let TimeOut = "";



const getWeatherData = async(cityVal) => {
    try{
        const resLocation = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityVal}&limit=${1}&appid=${apiKey}`);
        const dataLocation = await resLocation.json();
        const resCity = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataLocation[0].lat}&lon=${dataLocation[0].lon}&appid=${apiKey}&units=metric`);
        const dataCity= await resCity.json();
        // console.log(dataCity)

        const temperature = Math.round(dataCity.main.temp);
        const description = dataCity.weather[0].description;
        const icon = dataCity.weather[0].icon;
        const details =[
            `fells like: ${Math.round(dataCity.main.feels_like)}`,
            `Humidity: ${dataCity.main.humidity}`,
            `Wind speed: ${dataCity.wind.speed}`
        ]

        weatherDataEl.classList.remove('hidden');

        weatherDataEl.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
        weatherDataEl.querySelector('.temperature').textContent = `${temperature}°C`
        weatherDataEl.querySelector('.description').textContent = `${description}`
        weatherDataEl.querySelector('.details').innerHTML = details.map(detail => `<div>${detail}</div>`)
    }
    catch(err){
        console.log(err)
        errorInfoEl.classList.remove('error-info');
        errorInfoEl.innerText = `Ann error happend please try again later..`;
    }
}



formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityVal = cityInputEl.value;
    getWeatherData(cityVal);
})