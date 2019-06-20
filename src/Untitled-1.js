function getWeatherMessage(weatherId) {
  if (weatherId < 300) {
    return (src = "src/img/weather-icons/drizzle.svg");
  } else if (weatherId == 300) {
    return (src = "src/img/weather-icons/storm.svg");
  } else if (weatherId > 300 && weatherId <= 499) {
    return (src = "src/img/weather-icons/drizzle.svg");
  } else if (weatherId >= 500 && weatherId <= 599) {
    return (src = "src/img/weather-icons/rain.svg");
  } else if (weatherId >= 600 && weatherId <= 699) {
    return (src = "src/img/weather-icons/snow.svg");
  } else if (weatherId >= 700 && weatherId <= 799) {
    return (src = "src/img/weather-icons/fog.svg");
  } else if (weatherId == 800) {
    return (src = "src/img/weather-icons/clear.svg");
  } else if (weatherId == 801) {
    return (src = "src/img/weather-icons/partlycloudy.svg");
  } else if (weatherId >= 802 && weatherId <= 805) {
    return (src = "src/img/weather-icons/mostlycloudy.svg");
  }
}
