import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
import Newsletter from "./Components/Newsletter";
import CountryBar from "./Components/CountryBar";

function App() {
  return (
    <div>
      <Newsletter />
      <CountryBar />
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
