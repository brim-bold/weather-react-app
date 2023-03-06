import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function search() {
    let apiKey = "288fc2o04bt43eb21ce31fcd35acba08";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="row WeatherForecast">
        <ForecastDay day={forecast[1]} />
        <ForecastDay day={forecast[2]} />
        <ForecastDay day={forecast[3]} />
        <ForecastDay day={forecast[4]} />
        <ForecastDay day={forecast[5]} />
      </div>
    );
  } else {
    search();

    return null;
  }
}
