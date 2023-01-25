import "../styles/body.css";
import Ad from "./mainPagesubComp/Ad";
import Logos from "./mainPagesubComp/Logos";
import Popular from "./mainPagesubComp/Popular";
import Slider from "./mainPagesubComp/Slider";
import Special from "./mainPagesubComp/Special";

export default function Body(prop) {
  const { datas } = prop;
  return (
    <div className="body">
      <Slider />
      <Popular datas={datas} />
      <Ad />
      <div className="container">
        <Special />
      </div>

      <Logos />
    </div>
  );
}
