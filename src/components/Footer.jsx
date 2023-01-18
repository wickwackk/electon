import Electon from "./imageComp/Electon";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerLeft">
          <Electon />
          <div>
            <a href="#">G</a>
            <a href="#">F</a>
            <a href="#">V</a>
          </div>
        </div>
        <div className="footerRight">
          <p>
            © 2023 Tuulai. Built using AQUA and Tuulai Theme. Terms and
            Conditions
          </p>
        </div>
      </div>
    </div>
  );
}
