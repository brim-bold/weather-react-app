import React from "react";
import "./WeatherForecast.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.day.temperature.maximum);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.day.temperature.minimum);
    return `${temperature}`;
  }

  function forecastDay(time) {
    let daily = new Date(time * 1000);
    let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return day[daily.getDay()];
  }

  return (
    <div className="col-2 forecastDay">
      <div className="WeatherForecast-day">{forecastDay(props.day.time)}</div>
      <div className="WeatherIcon">
        <img
          src={props.day.condition.icon_url}
          alt={props.day.condition.icon}
        />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
