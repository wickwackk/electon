// import Electon from "./components/imageComp/electon";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route />
          <Route />
          <Route />
        </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
