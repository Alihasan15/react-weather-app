import React from 'react';

const InputLocation = ({clickEvent})=>{
    return(
        <div className="d-flex">
                <input type="text" placeholder="Enter City" id="cityInput" className="form-control mx-3" />
                <button className="btn btn-primary" id="btnSearch" onClick={clickEvent}>Search</button>
        </div>
    )
}

export default InputLocation