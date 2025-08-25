import React, { useEffect, useState } from 'react';
import axios from 'axios'

const DailyForecast = () => {
    
    const [daily, setDaily] = useState([]);

    useEffect(() => {
    const getDaily = async () => {
      try {
        const url = new URL(`https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=a27fe226de290113e0ead2fc98ba3ba7&cnt=5`);
        let response = await axios.get(url.toString(), {
          responseType: 'json',
        });
        console.log("res", response.data.list)
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
            <div style={styles.dailyCard}>
        <h4>{getDayAbbreviation(hour.dt_txt)}</h4>
        <h6>{hour.weather[0].icon}</h6>
        <h6>{hour.weather[0].main}</h6>
        <h6>{Math.trunc(hour.main.temp - 273.15)}°</h6>
        <div style={{background:'#5789FF', width:90, height:6,     borderRadius: '15px' }}></div>

      </div>
    ))}
    </>
  )

}

const styles = {
  dailyCard:{
    background: '#F5F5F5',
    marginRight: 20,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '15px'
  }
};

export default DailyForecast;