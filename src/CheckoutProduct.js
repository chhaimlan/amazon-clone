import { StarBorder } from "@material-ui/icons";
import React from "react";
import { Fade } from "react-reveal";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removedFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Fade right>
      <div className="checkoutProduct">
        <img className="checkoutporduct_image" src={image} alt="" />
        <div className="checkoutproduct_info">
          <p className="checkoutproduct_title">{title}</p>
          <p className="checkoutproduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutproduct_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarBorder className="yellow-color" />
              ))}
          </div>
          {!hideButton && (
            <button onClick={removedFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    </Fade>
  );
}

export default CheckoutProduct;
