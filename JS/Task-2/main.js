const apiKey = "087296edca6dca63a68ac79826e2094a";

document.getElementById('city').addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

function getWeather() {
    const city = document.getElementById('city').value.trim();
    const errorDiv = document.getElementById('error-message');
    const weatherIcon = document.getElementById('weather-icon');

    errorDiv.textContent = "";
    weatherIcon.style.display = "none"; // Pastikan icon tidak terlihat sebelum pencarian dimulai

    if (!city) {
        errorDiv.textContent = "Please enter a city name.";
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(currentWeatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found.");
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            errorDiv.textContent = error.message;
        });

    fetch(forecastUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error fetching forecast data.");
            }
            return response.json();
        })
        .then(data => displayHourlyForecast(data.list))
        .catch(error => {
            console.error(error.message);
        });
}

function displayWeather(data) {
    const tempDiv = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');

    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;

    tempDiv.innerHTML = `<p>${temperature}°C</p>`;
    weatherInfoDiv.innerHTML = `<p>${cityName}</p><p>${description}</p>`;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;
    weatherIcon.style.display = "block"; // Tampilkan icon setelah data berhasil diambil
}

function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    const hourlyHeading = document.getElementById('hourly-heading');

    hourlyForecastDiv.innerHTML = "";
    hourlyHeading.style.display = "block";

    hourlyData.slice(0, 8).forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp);
        const iconCode = item.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="${item.weather[0].description}">
                <span>${temperature}°C</span>
            </div>`;
        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}
