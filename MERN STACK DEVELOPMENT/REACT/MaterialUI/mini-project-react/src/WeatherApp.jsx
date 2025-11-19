import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    feels_like: 30.41,
    humidity: 48,
    temp: 29.76,
    temp_max: 29.76,
    temp_min: 29.76,
    weather: "scattered clouds",
    city_name: "Khanpur",
    country_name: "PK",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  } 

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Sigma</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
