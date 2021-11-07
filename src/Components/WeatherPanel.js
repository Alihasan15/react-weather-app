import React from 'react'
import {BsFillCloudsFill,BsFillSunriseFill,BsFillSunsetFill} from "react-icons/bs"
import {WiStars} from "react-icons/wi";

const WeatherPanel = ({dataObj})=>{
    return(
        <>
            
            <div className="panel d-flex flex-column p-4 justify-content-between flex-wrap">
                <div className="star up-top-star-panel d-flex justify-content-around">
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    
                </div>
                <div className="star top-star-panel d-flex justify-content-around">
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="minTemp">
                        <label htmlFor="minTempH2"  className="fs-3">Min Temp</label>
                        <h2 id="minTempH2">
                            {dataObj?.data?.main?.temp_min}<sup>°</sup>C
                        </h2>
                    </div>
                    <div>
                        <BsFillCloudsFill fontSize="8rem"/>
                        <h2>{dataObj?.data?.main?.temp}<sup>°</sup>C</h2>
                    </div>
                    <div className="maxTemp">
                        <label htmlFor="maxTempH2" className="fs-3">Max Temp</label>
                    <h2 className="maxTemp">
                        {dataObj?.data?.main?.temp_max}<sup>°</sup>C
                    </h2>
                    </div>
                </div>
                
                <div className="star bottom-star-panel d-flex justify-content-around">
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    
                </div>
                <div className="star down-bottom-star-panel d-flex justify-content-around">
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    <WiStars className="all-stars" fontSize="4rem"/>
                    
                </div>
            </div>
            {/* <div className="panel sunpanel d-flex align-items-center p-4 justify-content-around flex-wrap">
                <div className="">
                    <BsFillSunriseFill fontSize="8rem"/>
                    <h2>{convertUnixToLocalTime(dataObj?.data?.sys?.sunrise)}</h2>
                </div>
                <div className="">
                    <BsFillSunsetFill fontSize="8rem"/>
                    <h2>{convertUnixToLocalTime(dataObj?.data?.sys?.sunset)}</h2>
                </div>
            </div>
            <div className="panel windpanel d-flex align-items-center p-4 justify-content-around flex-wrap">
                <div className="">
                    <BsFillSunriseFill fontSize="8rem"/>
                    <h2>{convertUnixToLocalTime(dataObj?.data?.sys?.sunrise)}</h2>
                </div>
                <div className="">
                    <BsFillSunsetFill fontSize="8rem"/>
                    <h2>{convertUnixToLocalTime(dataObj?.data?.sys?.sunset)}</h2>
                </div>
            </div> */}
        </>

    )

    function convertUnixToLocalTime(unix){
        let unix_timestamp = unix;
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime
    }
}

export default WeatherPanel