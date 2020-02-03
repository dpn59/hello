import React from "react";

import "./App.css";
import WeatherCard from "./components/wethercard/component";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&unit=metrics&APPID=d50adfed9ddbfa280715cf9836e3ccb1"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  data().then(res => console.log(res));
  return (
    <div className="App">
      <WeatherCard
        temp={30}
        condition="Clouds"
        city="melborn"
        country="australia"
      />
      <WeatherCard temp={2} condition="Sunny" city="tokyo" country="japan" />
    </div>
  );
}

export default App;
