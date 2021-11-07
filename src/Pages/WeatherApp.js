import {React,useState,useEffect,useRef} from 'react';
import InputLocation from '../Components/InputLocation'
import WeatherPanel from '../Components/WeatherPanel';
import {getRequest,getRequestUsingLatandLong} from '../Service/Weather';

const WeatherApp = ()=>{
    const [weatherObj, setweatherObj] = useState({})
    const ref = useRef("");
    useEffect(getLocation, [])
    
    return(
        <>
            <div className="d-flex justify-content-between bg-light p-3 align-items-center">
                <h3>Weather App</h3>
                <InputLocation refId = {ref} clickEvent={handleSubmit}/>
            </div>
            <WeatherPanel dataObj={weatherObj} />
        </>
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
            console.log(x)
        });

      }
}

export default WeatherApp