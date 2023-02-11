import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href="https://www.brimandbold.com/" target="_blank" rel="noreferrer">
          Jaylene Jeanpierre{" "}
        </a>{" "}
        and is {""}
        <a
          href="https://github.com/brim-bold/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
