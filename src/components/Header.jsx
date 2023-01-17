import Basket from "./mainPagesubComp/Basket";
import Login from "./mainPagesubComp/Login";
import "../styles/header.css";
import Electon from "./imageComp/Electon";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Electon />
        <form action="">
          <input type="search" placeholder="Search anything" />
          <button type="submit">Search</button>
        </form>
        <div className="headerRight">
          <Login />
          <Basket />
        </div>
      </div>
    </div>
  );
}
