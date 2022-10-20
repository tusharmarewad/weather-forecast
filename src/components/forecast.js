import React from "react";

export default function Forecast(props) {
    return (
        <div className="container2">
            <div className="cityName">
                <h2>{props.name},{props.region},{props.country}</h2>
            </div>
            <div className="subContainer">
                <div className="time">
                    <h3>{props.localtime}</h3>
                </div>
                <div>
                    <h2 className="temp">{props.temperature}°c</h2>
                </div>
                <div>
                    <img src={props.img} alt="no img" className="image" />
                    <p>{props.weather_des}</p>
                </div>
            </div>

            <div className="subContainer sub">
                <div>
                    <h4>humidity</h4>
                    <p>{props.humidity}%</p>
                </div>
                <div>
                    <h4>real feels</h4>
                    <p>{props.feelslike}°c</p>
                </div>
                <div>
                    <h4>pressure</h4>
                    <p>{props.pressure} mbar</p>
                </div>
            </div>

            <div className="subContainer sub">
                <div>
                    <h4>wind speed</h4>
                    <p>{props.windspeed} km/h</p>
                </div>
                <div>
                    <h4>wind direction</h4>
                    <p>{props.wind_dir}</p>
                </div>
                <div>
                    <h4>uv index</h4>
                    <p>{props.uv_index}</p>
                </div>
            </div>
        </div>
    );
}