import React from 'react'
import clear from '../../img/weather-icons/clear.svg'
// import cloudy from '../../img/weather-icons/cloudy.svg'
import drizzle from '../../img/weather-icons/drizzle.svg'
import fog from '../../img/weather-icons/fog.svg'
import mostlycloudy from '../../img/weather-icons/mostlycloudy.svg'
import partlycloudy from '../../img/weather-icons/partlycloudy.svg'
import rain from '../../img/weather-icons/rain.svg'
import snow from '../../img/weather-icons/snow.svg'
import storm from '../../img/weather-icons/storm.svg'
import unknown from '../../img/weather-icons/unknown.svg'

// function Icon({ name }) {
//   if (name === 'clear') {
//     return <img src={clear} alt="clear" />
//   } else if (name === 'cloudy') {
//     return <img src={cloudy} alt="cloudy" />
//   } else if (name === 'drizzle') {
//     return <img src={drizzle} alt="drizzle" />
//   } else if (name === 'fog') {
//     return <img src={fog} alt="fog" />
//   } else if (name === 'mostlycloudy') {
//     return <img src={mostlycloudy} alt="mostlycloudy" />
//   } else if (name === 'partlycloudy') {
//     return <img src={partlycloudy} alt="partlycloudy" />
//   } else if (name === 'rain') {
//     return <img src={rain} alt="rain" />
//   } else if (name === 'snow') {
//     return <img src={snow} alt="snow" />
//   } else if (name === 'storm') {
//     return <img src={storm} alt="storm" />
//   } else {
//     return <img src={unknown} alt="unknown" />
//   }
// }

const images = {
  storm: { src: storm, alt: "storm" },
  drizzle: { src: drizzle, alt: "drizzle" },
  rain: { src: rain, alt: "rain" },
  snow: { src: snow, alt: "snow" },
  fog: { src: fog, alt: "fog" },
  clear: { src: clear, alt: "clear" },
  partlyCloudy: { src: partlycloudy, alt: "partly cloudy" },
  mostlyCloudy: { src: mostlycloudy, alt: "mostly cloudy" },
  unknown: { src: unknown, alt: "unknown" },
};

function selectImage(weatherId) {
  if (weatherId < 300) {
    return images.storm;
  } else if (weatherId < 499) {
    return images.drizzle;
  } else if (weatherId < 599) {
    return images.rain;
  } else if (weatherId < 699) {
    return images.snow;
  } else if (weatherId < 799) {
    return images.fog;
  } else if (weatherId === 800) {
    return images.clear;
  } else if (weatherId === 801) {
    return images.partlyCloudy;
  } else if (weatherId < 805 && weatherId > 801) {
    return images.mostlyCloudy;
  }
  return images.unknown;
}

const Icon = ({ weatherId }) => {
  const image = selectImage(weatherId);

  return (
    <div className="weather-img">
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default Icon
