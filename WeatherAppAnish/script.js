api = "2ad76ade04cc65713129807dcd92424d";
async function getWeather() {
  let cityy = document.getElementById("city").value.trim();
  let background = document.getElementById("background");
  let weatherr = document.getElementById("weather");
  if (!cityy) {
    weatherr.innerHTML = "<p class='text-danger'>Please enter a city name.</p>";
    return;
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityy}&appid=${api}&units=metric`;
  let response = await fetch(url);
  if (!response.ok) {
    weatherr.innerHTML = "<p class='text-danger'>City not found.</p>";
    return;
  }
  let data = await response.json();
  const name = data.name;
  const sys = data.sys;
  const weather = data.weather;
  const main = data.main;
  let icon = weather[0].icon;
  if (icon.includes("n")) {
    background.classList.add("bg-dark", "text-white");
  } else {
    background.classList.add("bg-light", "text-dark");
  }
  weatherr.innerHTML = `<h3 class="mb-2">${name}, ${sys.country}</h3>
    <p class="text-capitalize fs-4">${weather[0].main} - ${weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon" class="my-2"/>
    <p class="fs-4">${main.temp.toFixed(1)}°C</p>`;
}
