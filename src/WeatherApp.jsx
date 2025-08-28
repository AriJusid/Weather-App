import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import CityWeather from "./components/CityWeather";
import DailyForecast from "./components/DailyForecast";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const [city, setCity] = useState("Berlin");
  const [dark, setDark] = useState(false);
  const [faren, setFaren] = useState(false);

  const name =  city;

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.inputCity.value);
  };

  return (
    <>
    <div style={styles.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputCity"
          placeholder="Search city"
          style={styles.input}
        />
      </form>
      <div>
      <button style={styles.btnSection} onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </button>

      <button style={styles.btnSection} onClick={() => setFaren(!faren)}>
        {faren ? "°F" : "°C"}
      </button>
      </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ flexDirection: "column", marginRight: 40 }}>
          <CurrentWeather name={name} faren={faren} />
          <h2 style={{ textAlign: "left" }}>Other large cities</h2>
          <CityWeather name="Paris" faren={faren} />
          <CityWeather name="Liverpool" faren={faren} />
          <CityWeather name="Alaska" faren={faren} />
        </div>

        <div style={{ flexDirection: "column" }}>
          <HourlyForecast faren={faren} />
          <DailyForecast faren={faren} />
        </div>
      </div>
    </>
  );
}

const styles = {
  input: {
    padding: 13,
    border: "none",
    borderRadius: 50,
    background: "#F5F5F5",
    display: "flex",
  },
  header:{
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  btnSection:{
    marginRight: 20,
  }
};

export default App;