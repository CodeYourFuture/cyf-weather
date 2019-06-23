const id = "response.list[0].weather[0].id";
let weatherIcons;

if (id < 300) {
  weatherIcons = "<img src={storm} />";
} else if (id > 300 && id <= 499) {
  weatherIcons = "<img src={drizzle} />";
} else if (id >= 500 && id <= 599) {
  weatherIcons = "<img src={rain} />";
} else if (id >= 600 && id <= 699) {
  weatherIcons = "<img src={snow} />";
} else if (id >= 700 && id <= 799) {
  weatherIcons = "<img src={fog} />";
} else if (id == 800) {
  weatherIcons = "<img src={clear} />";
} else if (id == 801) {
  weatherIcons = "<img src={partlycloudy} />";
} else if (id >= 802 && id <= 805) {
  weatherIcons = "<img src={mostlycloudy} />";
}
