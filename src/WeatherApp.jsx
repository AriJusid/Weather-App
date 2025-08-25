import './App.css'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
// import CityWeather from './components/CityWeather'
import DailyForecast from './components/DailyForecast'

function App() {
  return (
    <>
    <div style={{display:'flex'}}>
    <div  style={{flexDirection: 'column'}}>
      <CurrentWeather/>
      <h2 style={{textAlign:'left'}}>Other large cities</h2>
      <CurrentWeather/>
      <CurrentWeather/>
      <CurrentWeather/>
      </div>

      <div  style={{flexDirection: 'column'}}>
      <HourlyForecast/>
      <DailyForecast/>
      </div>
      </div>
    </>
  )
}

export default App
