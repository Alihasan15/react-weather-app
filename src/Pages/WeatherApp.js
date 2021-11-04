import React from 'react';
import InputLocation from '../Components/InputLocation'
import getRequest from '../Service/Weather';

const WeatherApp = ()=>{
    getLocation();
    
    return(
        <div className="d-flex justify-content-between bg-light mb-3 p-3 align-items-center">
            <h2>Weather App</h2>
            <InputLocation clickEvent={handleSubmit}/>
        </div>
    )

    function handleSubmit(e){
        getRequest("Mumbai")
        .then(x=>{
            console.log(x);
        })
    }
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        }else{
            console.log("x");
        }
      }
      
      function showPosition(position) {
        console.log( "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude);
      }
}

export default WeatherApp