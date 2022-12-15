import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
import Newsletter from "./Components/Newsletter";
import CountryBar from "./Components/CountryBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Newsletter />
      <CountryBar />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
