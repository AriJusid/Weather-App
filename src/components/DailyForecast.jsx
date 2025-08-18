import React, { useEffect, useState } from 'react';
import axios from 'axios'

const DailyForecast = () => {
    
    const [daily, setDaily] = useState([]);

    useEffect(() => {
    const getDaily = async () => {
      try {
        const url = new URL(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Berlin&cnt=5&appid=a27fe226de290113e0ead2fc98ba3ba7`);
        let response = await axios.get(url.toString(), {
          responseType: 'json',
        });
        console.log(response.data)
        setDaily(Array.isArray(response.data.city) ? response.data.city : []);
      } catch (error) {
        console.error('Error al cargar hourly:', error);
      } 
    };
    getDaily();
  }, []);

}

export default DailyForecast;