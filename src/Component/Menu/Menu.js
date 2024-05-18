import React, { useState, useEffect } from "react";
import { getDatapi } from "../api/api.js";
import styles from "./Menu.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Menu = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const fetchData = async () => {
    try {
      const data = await getDatapi();
      setFoodMenu(data);
    } catch (error) {
      toast.error("error occured ");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <ToastContainer />
      <div className="pt-4">
        <img
          src={require("../../Images/9933847.jpg")}
          alt="logo"
          className={styles.hovereffect}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "5px",
          fontSize: "24px",
          fontWeight: "bold",
          color: "grey",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Deliciousness served on a plate
      </div>

      <div className="row mt-4">
        {foodMenu.map((item) => (
          <div key={item.id} className="col-md-6 mb-4">
            <div class="card" className={styles.menucard}>
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "150px", objectFit: "contain" }}
              />
              <div className={styles.cardbody}>
                <h5 className="card-title">Name: {item.name}</h5>
                <h5 className="card-title">Category: {item.category}</h5>
                <h5 className="card-title">Price: ${item.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
