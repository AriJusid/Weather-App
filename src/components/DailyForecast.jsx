import React, { useEffect, useState } from 'react';
import axios from 'axios'

const DailyForecast = ({faren}) => {
    
    const [daily, setDaily] = useState([]);
    
    function toFahrenheit(celsius) {
      return ((celsius * 9) / 5 + 32).toFixed(1);
    }

    useEffect(() => {
    const getDaily = async () => {
      try {
        const url = new URL(`https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=a27fe226de290113e0ead2fc98ba3ba7&cnt=5`);
        let response = await axios.get(url.toString(), {
          responseType: 'json',
        });
        setDaily(Array.isArray(response.data.list) ? response.data.list : []);
      } catch (error) {
        console.error('Error al cargar hourly:', error);
      } 
    };
    getDaily();
  }, []);

  function getDayAbbreviation(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  }

  

  return(
    <>
  <h2 style={{textAlign:'left', marginTop:30}}>5-day forecast</h2>
  {daily.map(hour => (
    <div style={styles.dailyCard} key={hour.dt_txt}>
      <h4 style={{textAlign:'left', marginRight: 0}}>{getDayAbbreviation(hour.dt_txt)}</h4>
      <div style={styles.main}>
        <img  style={{width:50}} src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} />
        <h6 style={{color:'#999999'}}>{hour.weather[0].main}</h6>
      </div>
      <div style={styles.main}>
        <h5>
          {
            typeof hour.main.temp === "number"
              ? !faren
                ? Math.trunc(hour.main.temp - 273.15) + "°"
                : `${Math.trunc(toFahrenheit(hour.main.temp - 273.15))}°F`
              : ""
          }
        </h5>
        <div style={{background:'#828282', width:350, height:6, borderRadius: '15px' , marginLeft:20}}></div>
      </div>
    </div>
  ))}
</>
  )

}

const styles = {
  dailyCard:{
    background: '#FAFAFA',
    marginRight: 20,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '20px',
    padding: 18,
    height: 20,
  },
  main:{
    display: 'flex',
    height: 50,
    alignItems: 'center',
  }
};

export default DailyForecast;