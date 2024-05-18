import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate();
  const cartclick = () => {
    navigate("/Cart");
  };

  const menu = () => {
    navigate("/Menu");
  };
  const contact = () => {
    navigate("/Contact");
  };


  return (
    <div>
      <div class="d-flex justify-content-around">
        <div class="p-2 fs-2 fw-bold text-danger-emphasis fst-italic">Canteen.</div>
        <div class="p-2 d-flex">
          <div class="p-2 fw-medium text-danger-emphasis">Home</div>
          <div class="p-2 fw-medium text-danger-emphasis" onClick={menu}>Menu</div>
          <div class="p-2 fw-medium text-danger-emphasis" onClick={cartclick}>Checkout</div>
          <div class="p-2 fw-medium text-danger-emphasis" onClick={contact}>Contact Us</div>
        </div>
        <div class="p-2 d-flex">
          <div class="p-2 ms-5" onClick={cartclick}>
            <img src={require("../../Images/basket_icon.png")} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
