import React from "react";
import Navbar from "../Navbar/Navbar";
const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative",marginTop:"10px"}}>
        <img
          src={require("../../Images/header_img.png")}
          alt="logo"
          style={{
            width: "80%",
            height: "60vh",
            margin: "auto",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p style={{ color: "white", fontSize: "50px",fontWeight:"bold" }}>Order Your Favourite </p>
          <p style={{ color: "white", fontSize: "50px" , fontWeight:"bold" }}>Food Here </p>
          <p style={{ color: "white", fontSize: "20px" }}>Choose Your Menu and Satify your craving.</p>
          <p style={{ color: "white", fontSize: "20px" }}>Bringing the flavor game to a whole new level.</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
