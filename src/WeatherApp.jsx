import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import CityWeather from "./components/CityWeather";
import DailyForecast from "./components/DailyForecast";
import { useEffect, useState } from "react";
import {useParams, useLocation} from "react-router-dom"

function App() {
  const [city, setCity] = useState("Berlin");
  const [clima, setClima] = useState();
  const query = useQuery();
  const name = query.get("inputCity");
   console.log("name", name);
  
   const handleSubmit = (n) => {
    setCity(n.target.inputCity.value);
    console.log(city);
  };
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputCity"
          onSubmit={handleSubmit}
          placeholder="Search city"
          style={styles.input}
        />
      </form>

      <div style={{ display: "flex" }}>
        <div style={{ flexDirection: "column", marginRight: 40 }}>
          <CurrentWeather name={name} />
          {console.log("city", city)}
          <h2 style={{ textAlign: "left" }}>Other large cities</h2>
          <CityWeather name={"Paris"} />
          <CityWeather name={"Liverpool"} />
          <CityWeather name={"Alaska"} />
        </div>

        <div style={{ flexDirection: "column" }}>
          <HourlyForecast />
          <DailyForecast />
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
    marginBottom: 20,
    display: "flex",
  },
};

export default App;
