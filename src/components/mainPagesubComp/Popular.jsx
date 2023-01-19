import "../../styles/popular.css";
import { datas } from "../../datas";
import Product from "./Product";
import { useState } from "react";

const categories = [];
datas.map((data) => {
  if (!categories.includes(data.category)) {
    categories.push(data.category);
  }
});

export default function Popular() {
  const [prod, setProd] = useState(datas.slice(0, 8));
  function cataFilter(cata) {
    setProd(
      datas.filter((data) => {
        return data.category === cata;
      })
    );
  }
  return (
    <div className="popular">
      <div className="container">
        <div className="popularBar">
          <h1>Popular products</h1>
          <div className="popularButtons">
            {categories.map((category, index) => (
              <button
                className={isActive ? "active" : "notActive"}
                key={index}
                onClick={() => {
                  cataFilter(category);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="products">
          {prod.map((data, index) => {
            return <Product detail={data} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
