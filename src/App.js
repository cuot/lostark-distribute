import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CalcDistribute from "./components/CalcDistribute";

function App() {
  return (
    <div className="App bg-light">
      <Header />
      <CalcDistribute />
      <Footer />
    </div>
  );
}

export default App;
