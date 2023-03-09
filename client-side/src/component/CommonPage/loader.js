import React from 'react';
import loader from "../../assets/img/loading.svg"
const FullScreenLoader = () => {
    return (
        <div className="ProcessingDiv">
        <div className="center-screen">
            <img className="loader-size" src={loader}/>
        </div>
    </div>
    );
};

export default FullScreenLoader;