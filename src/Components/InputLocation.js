import React from 'react';

const InputLocation = ({clickEvent,refId})=>{
    return(
        <div className="d-flex">
                <input type="text" ref={refId} placeholder="Enter City" id="cityInput" className="form-control mx-3" />
                <button className="btn btn-primary" id="btnSearch" onClick={clickEvent}>Search</button>
        </div>
    )
}

export default InputLocation