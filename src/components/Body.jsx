import "../styles/body.css";
import Ad from "./mainPagesubComp/Ad";
import Logos from "./mainPagesubComp/Logos";
import Slider from "./mainPagesubComp/Slider";

export default function Body() {
  return (
    <div className="body">
      <Slider />
      <div>body</div>
      <Ad />
      <Logos />
    </div>
  );
}
