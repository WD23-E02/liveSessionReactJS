import React, {useState, useEffect} from "react";

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("London");
  const apiKey = "Your_Key"; // Replace with your WeatherAPI API key

  useEffect(() => {
    if (cityName !== "") {
      // Check if cityName is not empty
      let timer = setTimeout(() => {
        fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
        )
          .then((response) => response.json())
          .then((data) => setWeather(data));
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      // Clear weather data if cityName is empty
      setWeather(null);
    }
  }, [cityName]);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>

      {/* Input for user to change city */}
      <input
        style={{
          padding: "5px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city name"
      />
      {weather ? (
        <div style={{marginTop: "20px"}}>
          <p>Temperature: {weather.current.temp_c}°C</p>
        </div>
      ) : (
        <p style={{marginTop: "20px"}}>Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherApp;
