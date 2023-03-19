import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { removeItem, increase, decrease } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">$ {price}</h4>
        <button
          onClick={() => {
            dispatch(removeItem(id));
          }}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
      <div className="amount-btn">
        <KeyboardArrowUpIcon
          onClick={() => {
            dispatch(increase({ id }));
          }}
        />
        <p className="amount">{amount}</p>
        <KeyboardArrowDownIcon
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        />
      </div>
    </article>
  );
};

export default CartItem;
