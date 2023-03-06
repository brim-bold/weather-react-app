import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3 mainWeather">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <WeatherTemperature fahrenheit={props.data.temperature} />

              <span className="unit"></span>
            </div>
          </div>
        </div>
        <div className="col-6 moreWeather">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind:{Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
      <WeatherForecast city={props.data.city} />
    </div>
  );
}
