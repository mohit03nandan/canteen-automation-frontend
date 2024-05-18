import React,{useState} from "react";
import Sidebar from "../SideBar/Sidebar";

import { useNavigate } from "react-router-dom";
import { LoginApi } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {


    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }
    
    const [Login, setLogin] = useState({
      email: "",
      password: "",
    });
  
    function LoginEmailChange(event) {
      setLogin({ ...Login, email: event.target.value });
    }
  
    function LoginPasswordChange(event) {
      setLogin({ ...Login, password: event.target.value });
    }
  
    const Loginsubmit = async (e) => {
      e.preventDefault();
      if (Login.email === "" || Login.password === "") {
        toast.error("please fill all the feilds", {
          // position: toast.POSITION.TOP_RIGHT,
        });
        return;

      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(Login.email)) {
        toast.error("Please enter a valid email address: xyz@gmail.com", {
          // position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
  
      try {
        const response = await LoginApi({
          email: Login.email,
          password: Login.password,
        });
  
        if (response) {
          toast.success("login successfully", {
          });
          setTimeout(() => {
            navigate("/Dashboard");
            
          }, 1000);
          
        }
      } catch (error) {
        toast.error("Login Failed", {
          // position: toast.POSITION.TOP_RIGHT,
        });
      }
    };


  return (
    <div class="container mt-5">
    <ToastContainer/>
      <div class="row">
        <div class="col">
          <Sidebar />
        </div>

        <div class="col align-self-center">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label fs-3">
                Email address
              </label>
              <input
                type="email"
                class="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={Login.email}
                onChange={LoginEmailChange}
              />
              <div id="emailHelp" class="form-text ">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label fs-3">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                value={Login.password}
                        onChange={LoginPasswordChange}
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary" onClick={Loginsubmit}>
              Login
            </button>
            <div>
                    <div className="d-flex">
                        <p className="fst-italic">
                            Don't have an account?{" "}
                            <span class="text-primary ms-1">
                                <a onClick={handleSubmit}>Sign Up</a>
                            </span>
                        </p>
                    </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
