const apiKey = "b0435bde4ba28123b92d8544c2472b5a";

function getWeather() {
    let city = document.getElementById("cityInput").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temperature").innerText = `🌡️ Temperature: ${data.main.temp}°C`;
            document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;
            document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            getForecast(city);
        })
        .catch(error => alert("City not found!"));
}

function getForecast(city) {
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            let forecastDiv = document.getElementById("forecast");
            forecastDiv.innerHTML = ""; 

            for (let i = 0; i < data.list.length; i += 8) { 
                let forecast = data.list[i];
                let forecastCard = document.createElement("div");
                forecastCard.classList.add("forecast-card");
                forecastCard.innerHTML = `
                    <h4>${new Date(forecast.dt_txt).toDateString()}</h4>
                    <p>🌡️ ${forecast.main.temp}°C</p>
                    <p>💧 ${forecast.main.humidity}%</p>
                    <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png">
                `;
                forecastDiv.appendChild(forecastCard);
            }
        });
}
