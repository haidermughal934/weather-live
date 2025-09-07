function WeatherCard({ data }) {
  const condition = data.weather[0].main.toLowerCase();
  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const visibility = data.visibility / 1609.344; // meters → miles

  return (
    <>
      {/* Current weather */}
      <section className="current-weather">
        <div className="icon">
          <img src={iconSrc} alt={condition} />
          <div className="weather-info">
            <h2 className="city">{data.name}</h2>
            <p className="temp">Temperature: {Math.round(data.main.temp)}°C</p>
            <p className="temp" style={{ color: "darkGrey" }}>
              Weather Condition: {data.weather[0].description.toUpperCase()}
            </p>
          </div>
        </div>
      </section>

      {/* Forecast cards */}
      <section className="forcast">
        <div className="day">
          <p className="weekday">Wind Speed</p>
          <div className="icon">
            <i className="fas fa-wind fa-4x" style={{ color: "darkgray" }}></i>
          </div>
          <p className="temp">{data.wind.speed} km/h</p>
        </div>

        <div className="day">
          <p className="weekday">Feels Like</p>
          <div className="icon">
            <i
              className="fas fa-thermometer-half fa-4x"
              style={{ color: "rgba(255, 251, 0, 0.95)" }}
            ></i>
          </div>
          <p className="temp">{Math.round(data.main.feels_like)}°C</p>
        </div>

        <div className="day">
          <p className="weekday">Humidity</p>
          <div className="icon">
            <i
              className="fas fa-tint fa-4x"
              style={{ color: "rgb(28, 170, 218)", marginTop: "15px" }}
            ></i>
          </div>
          <p className="temp">{data.main.humidity}%</p>
        </div>

        <div className="day">
          <p className="weekday">Visibility</p>
          <div className="icon">
            <i className="fa-solid fa-eye fa-4x" style={{ color: "white" }}></i>
          </div>
          <p className="temp">{visibility.toFixed(1)} Statute Miles</p>
        </div>
      </section>
    </>
  );
}

export default WeatherCard;
