import "../../styles/popular.css";
import { datas } from "../../datas";
import Product from "./Product";

export default function Popular() {
  return (
    <div className="popular">
      <div className="container">
        <div className="popularBar">
          <h1>Popular products</h1>
          <div className="popularButtons">
            <button>Cameras</button>
            <button>Laptops</button>
            <button>Tablets</button>
            <button>Mouse</button>
            <button>Sale</button>
          </div>
        </div>

        <div className="products">
          {datas.map((data, index) => {
            return <Product detail={data} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
