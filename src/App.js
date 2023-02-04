import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import storm from "../src/img/weather-icons/storm.svg";

//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {
  return (
    <div className="App">
      <Header title={siteTitle} />
      <main className="c-site-main" tabIndex="0">
      </main>
      <Footer />
      <img src={storm} alt="storm icon" />
    </div>
  );
}

export default App;
