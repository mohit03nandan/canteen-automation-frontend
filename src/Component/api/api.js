import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function SignupApi(signupData) {
    <ToastContainer />;
    try {
      const reqUrl = "http://localhost:3001/signup";
      const result = await axios.post(reqUrl, signupData);
      if (result.data) {
        return result.data;
      }
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("User already exists.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      } else {
        toast.error(
          "An error occurred while signing up. Please try again later.",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
        return;
      }
    }
  }

  export async function LoginApi(LoginupData) {
    <ToastContainer />;
    try {
      const reqUrl = "http://localhost:3001/login";
      const result = await axios.post(reqUrl, LoginupData);
      if (result.data) {
        return result.data;
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("email and password not matched!.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      } else {
        toast.error("An error occurred while login up. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
    }
  }
  

export async function getDatapi() {
    <ToastContainer />;
    try {
      const reqUrl = "http://localhost:3001/fooditem/getdata";
      const result = await axios.post(reqUrl);
      if (result.data) {
        return result.data;
      }
    } catch (error) {
      toast.error(
        "An error occurred while fetching product up. Please try again later."
      );
      return;
    }
  }


  export async function addcart(addcartData) {
    <ToastContainer />;
    try {
      const reqUrl = "http://localhost:3001/add";
      const result = await axios.post(reqUrl,addcartData);
      if (result.data) {
        return result.data;
      }
    } catch (error) {
      toast.error(
        "An error occurred while fetching product up. Please try again later."
      );
      return;
    }
  }


  export async function getcartData() {
    <ToastContainer />;
    try {
      const reqUrl = "http://localhost:3001/add/getCartData";
      const result = await axios.post(reqUrl);
      if (result.data) {
        return result.data;
      }
    } catch (error) {
      toast.error(
        "An error occurred while fetching product up. Please try again later."
      );
      return;
    }
  }

  export async function deleteitem(id) {
    <ToastContainer />;
    try {
      const reqUrl = "http://localhost:3001/add/deleteCartData";
      const result = await axios.post(reqUrl,{ id });
      if (result.data) {
        return result.data;
      }
    } catch (error) {
      toast.error(
        "An error occurred while fetching product up. Please try again later."
      );
      return;
    }
  }

  export async function sendEmail(data) {
    <ToastContainer />;
    try {
      const reqUrl = "http://localhost:3001/sendEmail";
      const result = await axios.post(reqUrl,data);
      if (result.data) {
        return result.data;
      }
    } catch (error) {
      toast.error(
        "An error occurred while fetching product up. Please try again later."
      );
      return;
    }
  }

  export async function sortbyprice(data) {
    <ToastContainer />;
    try {
      const reqUrl = "http://localhost:3001/fooditem/sortbyprice";
      const result = await axios.post(reqUrl,data);
      if (result.data) {
        return result.data;
      }
    } catch (error) {
      toast.error(
        "An error occurred while fetching product up. Please try again later."
      );
      return;
    }
  }

  
  