import drizzle from "../img/weather-icons/drizzle.svg";
import storm from "../img/weather-icons/storm.svg";
import snow from "../img/weather-icons/snow.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import clear from "../img/weather-icons/clear.svg";

const getWeatherIcon = weatherId => {
  if (weatherId < 300) {
    //TODO: this is not complete - it ALWAYS returns the same thing!
    return storm;
  } else if (weatherId < 499) {
    return drizzle;
  } else if (weatherId < 599) {
    return rain;
  } else if (weatherId < 699) {
    return snow;
  } else if (weatherId < 799) {
    return fog;
  } else if (weatherId === 800) {
    return clear;
  } else if (weatherId === 801) {
    return partlycloudy;
  } else if (weatherId > 801 && weatherId < 805) {
    return mostlycloudy;
  } else {
    return "weather update not avaliable";
  }
};

export default getWeatherIcon;
