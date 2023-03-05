import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react';
function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchAPI = async () => {
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a6092d52621cde30b212bd3ae6e62ae8`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson.main);
      setCity(resJson.main);
    };
    fetchAPI();
  },[search]);

  return (
    <div className='outer'>
      <div className="weather">
        <input type="search" name="search" id='search' onChange={(event) => {setSearch(event.target.value)}}></input>
        <div>
          {!city?(
            <h2>Not Found</h2>
            ):(
              <div className='info'>
              <p>City: {search}</p>
              <p>Temperature: {city.temp}</p>
            </div>
          )}  
        </div>
      </div>
    </div>
  );
}

export default Weather;
