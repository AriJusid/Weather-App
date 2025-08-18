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
  console.log(hourly)

  return(
    <>
    {hourly.map(hour => (
      <div style={styles.hourCard}>
        <span>{hour.dt_txt}</span>,
        <h6>{hour.main.temp - 273.15}</h6>
      </div>
    ))}
    </>
  )
}

const styles = {
};

export default HourlyForecast;