findIcon = id => { };
let weatherIcon;
const id = this.props.currentData.weather.id;
if (id < 300) {
  weatherIcon = storm;
} else if (id > 300 && id <= 499) {
  weatherIcon = drizzle;
} else if (id >= 500 && id <= 599) {
  weatherIcon = rain;
} else if (id >= 600 && id <= 699) {
  weatherIcon = snow;
} else if (id >= 700 && id <= 799) {
  weatherIcon = fog;
} else if (id === 800) {
  weatherIcon = clear;
} else if (id === 801) {
  weatherIcon = partlycloudy;
} else if (id >= 802 && id <= 805) {
  weatherIcon = mostlycloudy;
}
console.log(this.props.data);


<div>
  <img src={() => this.findIcon(item.weather[0].id)} />
</div>
  <p>{item.main.temp}</p>
            </div >
temperature: response.main.temp,
  city: response.name,
    country: response.sys.country,
      humidity: response.main.humidity,
        description: response.weather[0].description,
          error: ""

src / img / weather - icons / clear.svg