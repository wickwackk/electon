import "../styles/body.css";
import Ad from "./mainPagesubComp/Ad";
import Logos from "./mainPagesubComp/Logos";
import Slider from "./mainPagesubComp/Slider";
import Special from "./mainPagesubComp/Special";

export default function Body() {
  return (
    <div className="body">
      <Slider />
      <Ad />
      <div className="container">
        <Special />
      </div>

      <Logos />
    </div>
  );
}
