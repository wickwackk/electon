import "../../styles/slider.css";

export default function Slider() {
  return (
    <div className="slider">
      <div>
        <h1>CANON</h1>
        <p>camera</p>
        <button>Shop now</button>
        <button>View more</button>
      </div>
      <div className="sliderRightside">
        <img src="./camera.png" alt="" />
        <p>only $89</p>
      </div>
    </div>
  );
}
