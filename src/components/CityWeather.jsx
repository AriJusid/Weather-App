import React, { useEffect, useState } from 'react';
import axios from 'axios'

const CityWeather = ({name}) => {
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
    {    console.log(current)
}
      <div style={styles.currentCard}>
        <div style={{display: 'flex', flexDirection:'column', textAlign: 'left', paddingLeft:20, marginRight:110}}>
        <span style={{fontSize:'0.9em'}}>{current.weather ?  current.sys.country : ""}</span> 
           <h2 style={{margin:0}}>{current.weather ?  current.name : ""}</h2> 
           <span style={{fontSize:'0.9em'}}>{current.weather ?  current.weather[0].description : ""}</span> 

       </div>
       <div style={{textAlign: 'right', margin:0}}>
       <p>{current.weather ? current.weather[0].icon: ""}  </p>

          <h2>{current.weather ?  Math.trunc(current.main.temp - 273.15) + "°": ""}</h2> 
       </div>

      </div>
    
    </div>
    </>
  )
}

const styles = {
  currentCard:{
    background: '#F5F5F5',
    width:300,
    height: 155,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-beetwen',
    marginBottom: 25,

  }
};

export default CityWeather;