import './App.css'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import CityWeather from './components/CityWeather'
import DailyForecast from './components/DailyForecast'

function App() {
  return (
    <>
    <input
                type="text"
                name="inputCity"
                autoComplete="Berlin"
                placeholder="Search city"
                style={styles.input}
              />
    <div style={{display:'flex'}}>
    <div  style={{flexDirection: 'column'}}>
      <CurrentWeather name = {"Berlin"}/>
      <h2 style={{textAlign:'left'}}>Other large cities</h2>
      <CityWeather name = {"París"}/>
      <CityWeather name = {"Liverpool"}/>
      <CityWeather name = {"Alaska"}/>
      </div>

      <div  style={{flexDirection: 'column'}}>
      <HourlyForecast/>
      <DailyForecast/>
      </div>
      </div>
    </>
  )
}

const styles = {
  input:{
    padding: 13,
    border: 'none',
    borderRadius: 50,
    background: '#F5F5F5',
    marginBottom: 20,
    margin: 0,
    display: 'flex'
  }
}

export default App
