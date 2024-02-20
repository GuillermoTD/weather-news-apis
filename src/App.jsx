import { useState } from "react";
import LayoutComponent from "./components/Layout/LayoutComponent";
import ContextApp from "./contexts/ContextApp";
import useFetch from "./customeHooks/useFetch";

const App = () => {
  const [weatherData, setWeatherData] = useState([
    {
      text: "weather",
    },
  ]);
  const [newsData, setNewsData] = useState([
    {
      text: "news",
    },
  ]);

  const [newsByCategory, setNewsByCategory] = useState([]);

  return (
    <ContextApp.Provider
      value={{
        weatherData,
        setWeatherData,
        newsData,
        setNewsData,
        newsByCategory,
        setNewsByCategory,
      }}
    >
      <LayoutComponent>{/* <RouteList /> */}</LayoutComponent>
    </ContextApp.Provider>
  );
};

export default App;
