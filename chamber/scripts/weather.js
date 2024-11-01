document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'eab5599fd83609499df31bdfbf7bef18'; // Replace with your OpenWeatherMap API key
    const city = 'Ikeja,NG';
    const weatherInfo = document.getElementById('weather-info');
    const weatherForecast = document.getElementById('weather-forecast');

    
    async function fetchWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error('Failed to fetch weather data:', error);
            weatherInfo.innerHTML = '<p>Unable to load weather data at this time.</p>';
        }
    }

    function displayWeather(data) {
        const currentWeather = data.list[0];
        const forecast = data.list.slice(1, 4); // Get the next three forecasts

        const weatherDescription = currentWeather.weather.map(w => capitalizeWords(w.description)).join(', ');
        const currentTemp = Math.round(currentWeather.main.temp);
        const currentHumidity = Math.round(currentWeather.main.humidity)
        const forecastHTML = forecast.map(day => {
            const date = new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' });
            const temp = Math.round(day.main.temp);
            return `<p>${date}: ${temp}°C</p>`;
        }).join('');

        weatherInfo.innerHTML = `
            <div class="cloudy-icon">
                <img src="images/cloudy.png" alt="cloudy Logo" width="80" height="auto" loading="lazy">
            </div>
            <p>Current Temperature: ${currentTemp}°C</p>
            <p>Weather: ${weatherDescription}</p>
            <p>Humidity: ${currentHumidity}%</p>
        `;

        weatherForecast.innerHTML = `
            ${forecastHTML}
        `;
    }

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    fetchWeather();
});


