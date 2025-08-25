import React, { useEffect, useState } from 'react';
import axios from 'axios'

const HourlyForecast = () => {
    
    const [hourly, setHourly] = useState([]);

    useEffect(() => {
    const getHourly = async () => {
      try {
        const url = new URL(`https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=a27fe226de290113e0ead2fc98ba3ba7&cnt=8&unit=metric:celsius`);
        let response = await axios.get(url.toString(), {
          responseType: 'json',
        });
        setHourly(Array.isArray(response.data.list) ? response.data.list : []);
      } catch (error) {
        console.error('Error al cargar hourly:', error);
      } 
    };
    getHourly();
  }, []);

  function formatTimeAMPM(dt_txt) {
    const date = new Date(dt_txt);
    
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Only show minutes if they're not zero
    const minutesStr = `:${minutes.toString().padStart(2, '0')}`;
    
    return `${hours}${minutesStr} ${ampm}`;
  }

  return(
    <>
    <div style={{display: 'flex'}}>
    {hourly.map(hour => (
      <div style={styles.hourCard}>
        <span style={{fontSize:'0.9em', padding:4, fontWeight:500}}>{formatTimeAMPM(hour.dt_txt)}</span>
        <div style={{background:'#D6D6D6', width:'68px', height:2,     borderRadius: '15px' }}></div>
        <h6 style={{margin:10}}>{hour.weather[0].icon}</h6>
        <span style={{fontSize:'0.7em'}}>{hour.weather[0].main}</span>
        <h2 style={{margin:10}}>{Math.trunc(hour.main.temp - 273.15)}°</h2>

      </div>
    ))}
    </div>
    </>
  )
}

const styles = {
  hourCard:{
    background: '#F5F5F5',
    marginRight: 20,
    padding: '7px',
    width: 70,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

export default HourlyForecast;