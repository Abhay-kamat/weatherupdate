const apiKey ="db8b893c126d320a88f8899da58d07d1";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherDiv = document.getElementById("weatherResult");

  if (!city) {
    weatherDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="${icon}" alt="${data.weather[0].description}" />
        <p><strong>${data.main.temp}°C</strong></p>
        <p>${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
    })
    .catch(error => {
      weatherDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
