import React, { useState, useEffect } from "react";
import { getDatapi,addcart,sortbyprice } from "../api/api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Fooddata = () => {
  const [foodData, setFoodData] = useState([]);
  // const [itemdata, setitemdata] = useState([])
  const [cart, setCart] = useState({
    name: "",
    category: "",
    price: "",
    image:"",
    description: "",
    item: 0,
  });

  const additem = async(name, category, price, description,image) => {
    if (cart.name === name) {
      // If the clicked item is the same as the currently selected item, increment the count by 1
      setCart({
        ...cart,
        item: cart.item + 1,
      });
    } else {
      // If the clicked item is different, reset the count to 1
      setCart({
        name: name,
        category: category,
        price: price,
        image:image,
        description: description,
        item: 1,
      });
    }
   try{
    const response = await addcart(
      {
        name: name,
        category: category,
        price: price,
        image:image,
        description: description,
      }
    );
    if(response){
      toast.success("item added successfully ", {
      });
    }
   }catch(e){
     toast.error("item not added ")
   }
  };

  const fetchData = async () => {
    try {
      const data = await getDatapi();
      setFoodData(data);
    } catch (error) {
      toast.error("error occured ")
    }
  };

  const sortdata= async(type)=>{
    try {
      const data = await sortbyprice({
        type: type
      })
      setFoodData(data)
    } catch (error) {
      toast.error("error occured ")
    }

   
  }
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <ToastContainer />;
      <div className="d-flex">
      <h1 className="mb-4 fs-2 fw-medium text-danger-emphasis me-auto">
        Always Fresh. Always On
      </h1>
      <div class="dropdown ">
      <button class="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
        sort
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" onClick={()=>sortdata("asc")}> sort by price (asc)</a></li>
        <li><a class="dropdown-item" href="#" onClick={()=>sortdata("dsc")}> sort by price (desc)</a></li>
      </ul>
</div>
      </div>

      <div className="row">
        {foodData.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={item.image}
                className="card-img-top"
                alt="..."
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Name: {item.name}</h5>
                <h5 className="card-title">Category: {item.category}</h5>
                <h5 className="card-title">price : ${item.price}</h5>
                <p className="card-text">{item.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    additem(item.name, item.category, item.price, item.description,item.image)
                  }
                >
                  Add 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fooddata;
