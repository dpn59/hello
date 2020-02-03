import React from "react";
import {
  WiDaySunny,
  WiDayCloudy,
  WiTornado,
  WiDust,
  WiNightAltHail,
  WiNightAltSnowWind
} from "weather-icons-react";

// const Icon = () => {
// return <WiDayCloudy className="icon" size={60} color="#fff" />;

const Icon = props => {
  switch (props.condition) {
    case "Clouds":
      return <WiDayCloudy className="icon" size={60} color="#fff" />;

    case "Sunny":
      return <WiDaySunny className="icon" size={60} color="#fff" />;
    case "Tornado":
      return <WiTornado className="icon" size={60} color="#fff" />;
    case "Dust":
      return <WiDust className="icon" size={60} color="#fff" />;
    case "Mist":
      return <WiDaySunny className="icon" size={60} color="#fff" />;
    case "Snow":
      return <WiNightAltSnowWind className="icon" size={60} color="#fff" />;
    case "Rain":
      return <WiNightAltHail className="icon" size={60} color="#fff" />;

    default:
      break;
  }
};

export default Icon;
