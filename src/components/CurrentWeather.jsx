import React, { useEffect, useState } from 'react';
import axios from 'axios'

const CurrentWeather = () => {
    
    const [current, setCurrent] = useState([]);

    useEffect(() => {
    const getCurrent = async () => {
      try {
        const url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=a27fe226de290113e0ead2fc98ba3ba7&units=metric:celsius`);
        let response = await axios.get(url.toString(), {
          responseType: 'json',
        });
        setCurrent(response.data ? response.data : []);
      } catch (error) {
        console.error('Error al cargar current:', error);
      } 
    };
    getCurrent();
  }, []);

  return(
    <>
    <div style={{display: 'flex'}}>
    
      <div style={styles.currentCard}>
       <h6>{current.weather ?  current.weather[0].main : ""}</h6> 
       <h2>{current.weather ?  Math.trunc(current.main.temp - 273.15) + "°" : ""}</h2> 
       <h6>{current.weather ?  "Feels like: " + Math.trunc(current.main.feels_like - 273.15) + "°": ""}</h6> 
       <h3>{current.weather ?  current.name : ""}</h3> 
       <h6>{current.weather ?  current.wind.speed + " m/s": ""}</h6> 
       <p>{current.weather ?   Math.trunc(current.main.temp_min - 273.15) + "° to " + Math.trunc(current.main.temp_max - 273.15) + "°": ""}</p>


      </div>
    
    </div>
    </>
  )
}

const styles = {
  currentCard:{
    background: '#F5F5F5',
    marginRight: 20,
    width:300,
    height: 155,
    borderRadius: 20,
    display: 'flex',

  }
};

export default CurrentWeather;