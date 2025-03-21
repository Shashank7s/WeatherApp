Here's a step-by-step guide to building a **Weather Dashboard** using **HTML, CSS, JavaScript, and OpenWeather API**. 🌦️  

---

## **📌 Project Overview**  
A **Weather Dashboard** allows users to enter a city name and view the current weather, including temperature, humidity, wind speed, and a 5-day forecast.  

---

## **🚀 Features**  
✅ Search for a city's weather  
✅ Display **current weather** (temperature, humidity, wind speed)  
✅ Show a **5-day forecast**  
✅ Use **OpenWeather API** to fetch live data  
✅ Change **background** based on weather conditions  
✅ Save previous searches in **local storage**  

---

## **🛠️ Tech Stack**  
- **HTML** → Structure  
- **CSS** → Styling (Flexbox/Grid)  
- **JavaScript (Vanilla JS)** → Fetching API & dynamic updates  
- **OpenWeather API** → Getting weather data  

---

## **📌 Step-by-Step Guide**  

### **1️⃣ Get OpenWeather API Key**  
1. Go to [OpenWeather API](https://openweathermap.org/api)  
2. Sign up and get an **API key**  
3. Use this API key in your JavaScript file  

---

### **2️⃣ Create Project Structure**  
📁 **weather-dashboard/**  
   ├── 📄 `index.html`  
   ├── 📄 `style.css`  
   ├── 📄 `script.js`  

---

### **3️⃣ Write the HTML Structure (`index.html`)**  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>🌦️ Weather Dashboard</h1>
        <input type="text" id="cityInput" placeholder="Enter city name">
        <button onclick="getWeather()">Search</button>
        
        <div id="weatherResult">
            <h2 id="cityName"></h2>
            <p id="temperature"></p>
            <p id="humidity"></p>
            <p id="wind"></p>
            <img id="weatherIcon" src="" alt="">
        </div>

        <h3>5-Day Forecast</h3>
        <div id="forecast"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

---

### **4️⃣ Style the Dashboard (`style.css`)**  
```css
body {
    font-family: Arial, sans-serif;
    background: #3498db;
    color: white;
    text-align: center;
}

.container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
}

input, button {
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 5px;
}

button {
    background: #2ecc71;
    color: white;
    cursor: pointer;
}

#weatherResult img {
    width: 100px;
}

#forecast {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.forecast-card {
    background: rgba(255, 255, 255, 0.2);
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
}
```

---

### **5️⃣ Fetch Weather Data (`script.js`)**  
```js
const apiKey = "YOUR_OPENWEATHER_API_KEY";

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
```

---

### **6️⃣ Run the App**
- Open **index.html** in a browser  
- Enter a city and click **Search**  
- View weather details and **5-day forecast**  

---

## **🚀 Extra Features (Optional)**
✅ **Change Background** Based on Weather  
✅ **Dark Mode Toggle**  
✅ **Geolocation Support** (Auto-fetch user's location)  
✅ **Save Last Searched City** in Local Storage  

---

Would you like any modifications or enhancements? 🚀
