import "../../styles/popular.css";
// import { datas } from "../../util/datas";
import Product from "./Product";
import { useState } from "react";
import axios from "axios";

export default function Popular(prop) {
  const { datas } = prop;

  const categories = [];
  datas.map((data) => {
    if (!categories.includes(data.category)) {
      return categories.push(data.category);
    }
  });
  const [prod, setProd] = useState(datas.slice(0, 8));
  function defaultFilter(cata) {
    return setProd(datas.slice(0, 8));
  }
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
            <button onClick={defaultFilter}>All</button>
            {categories.map((category, index) => (
              <button
                // className={isActive ? "active" : "notActive"}
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
