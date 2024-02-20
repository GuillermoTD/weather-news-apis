// routes.js
import { Route, Routes} from "react-router-dom";
import ClimaPage from "../pages/Weather/WeatherPage";
import NoticiasPage from "../pages/News/NewsPage";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/clima" element={<ClimaPage/>} />
      <Route path="/noticias" element={<NoticiasPage/>} />
    </Routes>
  );
};

export default RouteList;
