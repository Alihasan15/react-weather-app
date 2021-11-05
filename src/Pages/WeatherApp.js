import {React,useState,useEffect,useRef} from 'react';
import InputLocation from '../Components/InputLocation'
import WeatherPanel from '../Components/WeatherPanel';
import {getRequest,getRequestUsingLatandLong} from '../Service/Weather';

const WeatherApp = ()=>{
    const [weatherObj, setweatherObj] = useState({})
    const ref = useRef("");
    useEffect(getLocation, [])
    
    return(
        <div className="">
            <div className="d-flex justify-content-between bg-light mb-3 p-3 align-items-center">
                <h2>Weather App</h2>
                <InputLocation refId = {ref} clickEvent={handleSubmit}/>
            </div>
            <WeatherPanel datObj={weatherObj} />
        </div>
    )

    function handleSubmit(e){
        getRequest(ref.current.value)
        .then(x=>{
            setweatherObj(x);
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
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
        console.log( "Latitude: " + latitude +
        "<br>Longitude: " + longitude);
        if(latitude!==""&&longitude!=="")
        getRequestUsingLatandLong(latitude,longitude).then(x=>{
            setweatherObj(x)
        });

      }
}

export default WeatherApp