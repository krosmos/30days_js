//task3-task4
function fetchdata(){
    const weatherInfo = document.querySelector('.curr');
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const temp_c = data.current.temp_c;
        const temp_f = data.current.temp_f;
        const icon = data.current.condition.icon;
        const weather = data.current.condition.text;
        const cityName = data.location.name;
        const country = data.location.country;

        weatherInfo.innerHTML = `
        <h2>${cityName}, Today</h2>
        <h4>${country}</h4>
        <p>Temperature: ${temp_c}°C (${temp_f}°F)</p>
        <p><img src="${icon}" width="25px">${weather}</p>
        `;
    })
    .catch(error => {
        weatherInfo.innerHTML = `Sorry, cannot find ${searchedCity} in our dataset!`;
        for(let i = 0; i < 4;i++){
            let newDay = document.querySelectorAll('.upcomingDays')[i];
            newDay.innerHTML = ``;
        }
        console.error('Error fetching the weather data:', error)
    });
}

//task5-task6
let searchButton = document.getElementById('search');
searchButton.addEventListener('click',()=>{
    searchedCity = document.getElementById('cityname').value;
    console.log(searchedCity);
    url = `https://api.weatherapi.com/v1/current.json?key=f10a8198545c48879fe123629240508&q=${searchedCity}`;
    fetchdata();
    fiveDayForecast();
    searchedCity = ``;
});

//task7-task8
function fiveDayForecast(){
    url = `http://api.weatherapi.com/v1/forecast.json?key=f10a8198545c48879fe123629240508&q=${searchedCity}&days=5`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < 4;i++){
            let newDay = document.querySelectorAll('.upcomingDays')[i];
            let date = data.forecast.forecastday[i+1].date;
            let temp_c = data.forecast.forecastday[i+1].day.avgtemp_c;
            let temp_f = data.forecast.forecastday[i+1].day.avgtemp_f;
            let icon = data.forecast.forecastday[i+1].day.condition.icon;
            let weather = data.forecast.forecastday[i+1].day.condition.text;
            
            newDay.innerHTML = `
                <h4 class="date">${date}</h4>
                <div class="temp">avg. temp: ${temp_c}°C (${temp_f}°F)</div>
                <div class="condition"><img src="${icon}" width="25px">${weather}</div>
            `;
        }
    })
    .catch(error => console.error('Error fetching the weather data:', error));
}
