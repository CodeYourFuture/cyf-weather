import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { TodayForecast } from "./components/TodayForecast/TodayForecast";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
// import Icon from "./components/Icon/Icon";


//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {
  const [data, setData] = useState([]);

  function getNewLocation(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=7e5286e19236105eab5bba5240bf165e`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    
    <div className="App">
      <Header title={siteTitle} getNewLocation={getNewLocation} data={data} />

      <main className="c-site-main" tabIndex="0">
        <section className="todayForecast">
          <TodayForecast
            weatherId={data?.list?.[0]?.weather?.[0]?.id}
            description={data?.list?.[0]?.weather?.[0]?.description}
            temp_min={Math.floor(data?.list?.[0]?.main?.temp_min)}
            temp_max={Math.ceil(data?.list?.[0]?.main?.temp_max)}
            humidity={data?.list?.[0]?.main?.humidity}
            pressure={data?.list?.[0]?.main?.pressure}
          />
        </section>
        <section className="hourlyForecast">
          {data?.list?.splice(0, 7)?.map((future) => (
            <HourlyForecast
              time={future.dt_txt}
              iconId={future.weather[0].id}
              temp={future.main.temp.toFixed()}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
