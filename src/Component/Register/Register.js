import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login");
    }
    
  return (
    
    <div>
        <div class="container mt-5">
      <div class="row">
        <div class="col">
          <Sidebar />
        </div>

        <div class="col align-self-center">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label fs-6 fw-medium">
                First Name
              </label>
              <input class="form-control" type="text" placeholder="First Name" aria-label="default input example"/>
              </div>

              <div className='mb-3'>
              <label for="exampleInputEmail1" class="form-label fs-6  fw-medium">
                Last Name
              </label>
              <input class="form-control" type="text" placeholder="Last Name" aria-label="default input example"/>
              </div>

              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label fs-6  fw-medium">
                Email address
              </label>
              <input
                type="email"
                class="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label fs-6  fw-medium">
                Phone Number
              </label>
              <input
                type="Number"
                class="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Number"
              />
            </div>
            
          
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label fs-6  fw-medium">
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
              <label class="form-check-label" for="exampleCheck1  fw-medium">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Sign up
            </button>
            <div className='d-flex '>
                <p className="fst-italic">Already have an account?</p>
                   <span class="text-primary ms-1">
                                <a onClick={handleSubmit}>Login</a>
                     </span>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register