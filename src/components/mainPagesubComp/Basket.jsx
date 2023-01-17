import { useState } from "react";
import BasketLogo from "../imageComp/BasketLogo";

export default function Basket() {
  const [basketCounter, setBasketCounter] = useState(0);
  return (
    <div>
      <a href="#">
        <BasketLogo />
      </a>
      <span>{basketCounter}</span>
    </div>
  );
}
