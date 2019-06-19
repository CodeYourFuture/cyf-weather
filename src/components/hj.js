if (city) {
  this.setState({});
} else if (city) {
  this.setState({
    hour: response.forecast.forecastday[0].astro,
    temperature: response.forecast.forecastday.day.avgtemp_c,
    icon: response.forecast.forecastday.day.condition.icon
  });
}

<div>
  {FakeData.list.map((fakeDetails, index) => {
    return <h1> {fakeDetails.weather[0].icon}</h1>;
  })}
  ;
</div>;

import FakeData from "./components/FakeData.json";
