// import Electon from "./components/imageComp/electon";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [datas, setData] = useState();
  // axios.get("https://randomuser.me/api/").then((res) => console.log(res));
  useEffect(() => {
    axios.get("http://localhost:2020/datas").then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      <Header />
      {datas && <Body datas={datas} />}
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
