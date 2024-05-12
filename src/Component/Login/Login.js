import React from "react";
import Sidebar from "../SideBar/Sidebar";

import { useNavigate } from "react-router-dom";

const Login = () => {


    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }
    


  return (
    <div class="container mt-5">
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
            <button type="submit" class="btn btn-primary">
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
