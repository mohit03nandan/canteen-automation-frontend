import React from "react";

const Navbar = () => {
  return (
    <div>
      <div class="d-flex justify-content-around">
        <div class="p-2 fs-2 fw-bold text-danger-emphasis fst-italic">Canteen.</div>
        <div class="p-2 d-flex">
          <div class="p-2 fw-medium text-danger-emphasis">Home</div>
          <div class="p-2 fw-medium text-danger-emphasis">Menu</div>
          <div class="p-2 fw-medium text-danger-emphasis">Checkout</div>
          <div class="p-2 fw-medium text-danger-emphasis">Contact Us</div>
        </div>
        <div class="p-2 d-flex">
          <div class="p-2">
            <img src={require("../../Images/search_icon.png")} alt="logo" />
          </div>
          <div class="p-2 ms-5">
            <img src={require("../../Images/basket_icon.png")} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
