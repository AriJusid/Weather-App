import React, { useEffect, useState } from 'react';
import axios from 'axios'

const CurrentWeather = ({name}) => {
    const [current, setCurrent] = useState([]);

    useEffect(() => {
    const getCurrent = async () => {
      try {
        const url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a27fe226de290113e0ead2fc98ba3ba7&units=metric:celsius`);
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
        <div style={{display: 'flex', flexDirection:'column', textAlign: 'left', paddingLeft:20, marginRight:110}}>
          <h1 style={{margin:0}}>{current.weather ?  Math.trunc(current.main.temp - 273.15) + "°" : ""}</h1> 
          <div style={{display: 'flex', alignItems:'center'}}>
          <img style={{width:50, margin:0}} src={`https://openweathermap.org/img/wn/${current.weather ?current.weather[0].icon: ""}@2x.png`}></img>
          <span style={{fontSize:'0.7em'}}>{current.weather ?  current.weather[0].main : ""}</span> 
          </div>
          <span style={{fontSize:'0.8em', fontWeight:500}}>{current.weather ?  "Feels like: " + Math.trunc(current.main.feels_like - 273.15) + "°": ""}</span> 
       </div>
       <div style={{textAlign: 'right'}}>
          <h3>{current.weather ?  current.name : ""}</h3> 
          <h6>{current.weather ?  current.wind.speed + " m/s": ""}</h6> 
          <p>{current.weather ?   Math.trunc(current.main.temp_min - 273.15) + "° to " + Math.trunc(current.main.temp_max - 273.15) + "°": ""}</p>
       </div>

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
    height: 185,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',

  }
};

export default CurrentWeather;