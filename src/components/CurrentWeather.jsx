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
       <h6>{current.weather[0].main}</h6> 
        {  console.log(current.weather)} 

      </div>
    
    </div>
    </>
  )
}

const styles = {
  currentCard:{
    background: '#DBDBDB',
    marginRight: 20
  }
};

export default CurrentWeather;