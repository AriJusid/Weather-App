import './App.css'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import CityWeather from './components/CityWeather'
import DailyForecast from './components/DailyForecast'
import { useEffect, useState } from 'react'

function App() {
  const [city, setCity] = useState('Berlin');
  const [clima, setClima] = useState();

  const handleSubmit = (n) =>{
    setCity(n.target.value)
    console.log(city)
  }

useEffect (() => {
  const   reload = async () => {
    setClima(<CurrentWeather name = {city}/>)
    console.log(clima)


  
  }

    reload()
  }, [city])

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input 
                type="text"
                name="inputCity"
                onSubmit={handleSubmit}
                placeholder="Search city"
                style={styles.input}/>
      </form>

      <div style={{display:'flex'}}>
      <div  style={{flexDirection: 'column'}}>
      <CityWeather name = {useParams()}}/>
      {
        console.log("city", city)
      }
      <h2 style={{textAlign:'left'}}>Other large cities</h2>
      <CityWeather name = {"Paris"}/>
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
    margin: 0,
    marginBottom: 0 ,
    display: 'flex'
  }
}

export default App
