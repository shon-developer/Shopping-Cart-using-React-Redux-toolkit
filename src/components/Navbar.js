import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center relative">
        <h3>Redux Toolkit</h3>
        <div className="absolute right-[30px]">
          <CheckCircleIcon />
        </div>
        <div className="nav-container flex-col">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
