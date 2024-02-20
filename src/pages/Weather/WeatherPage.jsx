import { useContext, useEffect, useRef, useState } from "react";
// import useFetch from "../../customeHooks/useFetch";
import ContextApp from "../../contexts/ContextApp";
import { Button, Card, Input, Progress, Space } from "antd";
import useFetch from "../../customeHooks/useFetch";

const WeatherPage = () => {
  const [localData, setLocalData] = useState("");

  const [fetchedWeather, setFetchedWeather] = useState([]);

  const [error, setError] = useState(false);

  // const [inputValue, setInputValue] = useState("london");

  let inputValue = useRef("Santo Domingo");

  const { weatherData, setWeatherData } = useContext(ContextApp);

  const weatherPerCityUri = `https://api.weatherapi.com/v1/current.json?q=${
    inputValue.current
  }&key=${import.meta.env.VITE_WEATHER_API_KEY}`;

  const { data } = useFetch(weatherPerCityUri);

  useEffect(() => {
    setLocalData(data);
  }, [data, inputValue]);

  // console.log(localData);

  const handleSubmiFetchWeather = (event) => {
    event.preventDefault();
    if (event.target.value == null) {
      console.log("esta vacio");
      console.log(event.target.value );
      setError("This field is obligatory");
      return;
    }
    console.log("hola")
      try {
        fetch(
          `https://api.weatherapi.com/v1/current.json?q=${inputValue.current}&key=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        )
          .then((res) => res.json())
          .then((data) => setLocalData(data));
          setError(!error)
      } catch (error) {
        console.log(error)
      }


  };

  const handleKeyUp = (event) => {
    if (event.key == "Enter") {
      handleSubmiFetchWeather(event);
      console.log("tecla enter");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "1rem",
          width: "28rem",
          height: "25rem",
          border: "1px solid #0003",
        }}
      >
        <div style={{marginBottom:"2rem"}}>
          <Space.Compact style={{ width: "100%" }}>
            <Input
              placeholder="Write your city..."
              onChange={(event) => {
                inputValue.current = event.target.value;
                console.log(inputValue.current);
              }}
              onKeyUp={(event) => handleKeyUp(event)}
              autoFocus
            />

            <Button
              onClick={(event) => {
                handleSubmiFetchWeather(event);
              }}
            >
              <i className="ri-search-line"></i>
            </Button>
          </Space.Compact>
          <span style={{color:"red"}}>{error ? error : null}</span>
        </div>

        <img
          style={{ width: "6rem", height: "6rem" }}
          src={localData?.current?.condition?.icon}
          alt="weather-icon"
        />
        <h3>
          {localData?.current?.temp_c}
          {`°C`}
        </h3>
        <p style={{ fontSize: "1.1rem" }}>
          {localData?.current?.condition?.text}
        </p>
        <p style={{ fontSize: "1rem" }}>
          {localData?.location?.country} / {localData?.location?.name}
        </p>

        <strong>
          Today - {localData?.current?.last_updated} |{" "}
          {localData?.location?.name}
        </strong>
      </Card>

      <div
        style={{
          display: "flex",
          gap: "0.4rem",
          width: "28rem",
          height: "25rem",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card>
          Humidity:
          <Progress percent={localData?.current?.humidity} status="active" />
        </Card>
        <Card>
          <i className="ri-windy-line" style={{ fontSize: "2rem" }}></i>
          <span> Wind Speed: {localData?.current?.wind_kph}kph</span>
        </Card>
        <Card>
          <i className="ri-t-shirt-air-line" style={{ fontSize: "2rem" }}></i>
          <span> Air Pressure: {localData?.current?.pressure_mb}kph</span>
        </Card>
        <Card>
          <i className="ri-eye-line" style={{ fontSize: "2rem" }}></i>
          <span>Visibility: {localData?.current?.vis_miles}kph</span>
        </Card>
      </div>
    </div>
  );
};

export default WeatherPage;
