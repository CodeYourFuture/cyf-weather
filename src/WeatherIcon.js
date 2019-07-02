import React from "./react";

let weatherIcon = "";
let weatherid = "";
class weatherIcon extends React.Component {
  render() {
    if (weatherid < 300) {
      weatherIcon = <img src={storm} alt="stormy" />;
    } else if (weatherid > 300 && weatherid <= 499) {
      weatherIcon = <img src={drizzle} alt="drizzle" />;
    } else if (weatherid >= 500 && weatherid <= 599) {
      weatherIcon = <img src={rain} alt="rain" />;
    } else if (weatherid >= 600 && weatherid <= 699) {
      weatherIcon = <img src={snow} alt="snow" />;
    } else if (weatherid >= 700 && weatherid <= 799) {
      weatherIcon = <img src={fog} alt="fog" />;
    } else if (weatherid === 800) {
      weatherIcon = <img src={clear} alt="clear" />;
    } else if (weatherid === 801) {
      weatherIcon = <img src={partlycloudy} alt="partlycloudy" />;
    } else if (weatherid >= 802 && weatherid <= 805) {
      weatherIcon = <img src={mostlycloudy} alt="mostlycloudy" />;
    }
  }
}

export default weatherIcon;
