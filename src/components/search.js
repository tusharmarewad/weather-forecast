import React, { useState } from "react";
import Forecast from "./forecast"
export default function Search() {
    const [location, setLocation] = useState("");
    const [data, setData] = useState("");
    const [fetchData, setFetchData] = useState("");
    const [time, setTime] = useState("");
    let urlData = "";

    function handleClick(e) {
        e.preventDefault();
        if (location.length > 0) {
            urlData = `http://api.weatherstack.com/current?access_key=269178a66001f8f3ba37391d395ccbaa&query=${location}`;
        }

        fetch(urlData).then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Something went wrong');
        }).then(res => {
            setData(res.current)
            setFetchData(res.location)

            setTime(res.location.localtime)

            console.log(res);
        }).catch((error) => {
            console.log(error)
        });;

    }

    return (
        <div className="data">
            <div className="box">
                <h1>Weather Forecast</h1>
                <input
                    type="text"
                    className="inputField"
                    value={location}
                    placeholder="enter location"
                    onChange={(event) => {
                        setLocation(event.target.value);
                    }}
                />
                <button className="btn" onClick={handleClick}>Search</button>
            </div>
            <Forecast
                name={fetchData.name}
                region={fetchData.region}
                country={fetchData.country}
                localtime={time}
                temperature={data.temperature}
                img={data.weather_icons}
                weather_des={data.weather_descriptions}
                humidity={data.humidity}
                feelslike={data.feelslike}
                pressure={data.pressure}
                windspeed={data.wind_speed}
                wind_dir={data.wind_dir}
                uv_index={data.uv_index}
            />
        </div>
    );
}
