import React, { useState, useEffect } from "react";
import { getcartData, deleteitem } from "../api/api";
import easyinvoice from "easyinvoice";

const Cart = () => {
  const [cartData, setcartData] = useState([]);


  const fetchcartData = async () => {
    const data = await getcartData();
    setcartData(data);
  };

  const removeitem = async (id) => {
     await deleteitem(id);
    fetchcartData()
  };

  useEffect(() => {
    fetchcartData();
  }, []);

  const generateInvoice = async () => {
    const data = {
      documentTitle: "INVOICE",
      currency: "USD",
      taxNotation: "vat",
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 25,
      logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",
      sender: {
        address: "1234 Street",
        zip: "1234 AB",
        city: "Kanpur",
        country: "India",
      },
      client: {
        company: "Client Company",
        address: "Client Address",
        zip: "4567 CD",
        city: "Client City",
        country: "Client Country",
      },
      invoiceNumber: "2021.0001",
      invoiceDate: new Date().toISOString().split('T')[0],
      products: cartData.map((item) => ({
        quantity: item.items,
        description: item.name,
        tax: 0,
        price: item.price,
      })),
      bottomNotice: "Thank you for your business!",
      settings: {
        currency: "USD",
      },
      translate: {},
      images: {
        background: "https://public.easyinvoice.cloud/img/watermark-draft.jpg",
      },
    };

    const result = await easyinvoice.createInvoice(data);
    easyinvoice.download('invoice.pdf', result.pdf);
  };

  const calculateTotal = () => {
    let total = 0;
    cartData.forEach((cartItem) => {
      total += cartItem.price * cartItem.items;
    });
    return total;
  };

  return (
    <div>
      <nav className="navbar bg-info">
        <div className="container-fluid">
          <button className="btn btn-primary" type="button">Please CheckOut</button>
          <button className="btn btn-primary ms-auto" type="button" onClick={generateInvoice}>
            Your Invoice
          </button>
        </div>
      </nav>

      <div className="m-5 p-5 mt-2" style={{ border: "2px solid grey", borderRadius: "10px" }}>
        {cartData.map((cartItem, index) => (
          <div key={index} className="d-flex align-items-center mb-3 p-3 bg-white" style={{ border: "2px solid grey" }}>
            <div className="col-3">
              <img src={cartItem.image} alt="..." style={{ height: "150px", objectFit: "cover", border: "3px solid grey", borderRadius: "10px" }} />
            </div>
            <div className="col-3">
              <p>Name: {cartItem.category}</p>
              <p>Category: {cartItem.name}</p>
              <p>Price: ${cartItem.price}</p>
              <p>Total: ${cartItem.items * cartItem.price}</p>
            </div>
            <div className="col-3">
              <p>Quantity: {cartItem.items}</p>
            </div>
            <div className="col-3">
              <button className="btn btn-danger" onClick={() => removeitem(cartItem._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
