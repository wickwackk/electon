import BasketLogo from "../imageComp/BasketLogo";
import "../../styles/product.css";
export default function Product(prop) {
  const { detail } = prop;
  return (
    <div className="product">
      <img src={detail.image} alt="" />
      <div className="productDetails">
        <div>
          <p>{detail.category}</p>
          <p>{detail.name}</p>
          <p>${detail.price}</p>
        </div>
        <BasketLogo />
      </div>
    </div>
  );
}
