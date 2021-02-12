import "./App.css";
import React from "react";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeateher";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [city, setCity] = React.useState("");
  const [weather, setWeather] = React.useState([]);
  const fetchCityWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
      .then((Response) => Response.json())
      .then((result) => {
        setWeather({
          temp: result.main.temp,
          feels_like: result.main.feels_like,
          temp_min: result.main.temp_min,
          temp_max: result.main.temp_max,
          pressure: result.main.pressure,
          condition: result.weather[0].main,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <CityInput
        city={city}
        setCity={setCity}
        fetchCityWeather={fetchCityWeather}
      />
      <br />
      <CityWeather
        city={city}
        temp={weather.temp}
        feels_like={weather.feels_like}
        temp_min={weather.temp_min}
        temp_max={weather.temp_max}
        pressure={weather.pressure}
        condition={weather.condition}
      />
    </>
  );
}

export default App;
