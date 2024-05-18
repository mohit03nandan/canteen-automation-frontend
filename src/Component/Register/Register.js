import React,{useState} from 'react'
import Sidebar from '../SideBar/Sidebar'
import { SignupApi } from '../api/api';
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login");
    }
    
   
    const [signup, setsignup] = useState({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
  
    function signupNameChange(e) {
      setsignup({ ...signup, name: e.target.value });
    }
  
    function signupEmailChange(event) {
      setsignup({ ...signup, email: event.target.value });
    }
  
    function signupMobileChange(event) {
      setsignup({ ...signup, mobile: event.target.value });
    }
  
    function signupPasswordChange(event) {
      setsignup({ ...signup, password: event.target.value });
    }
  

    const signupSubmit = async (e) => {
      e.preventDefault();
      if (
        signup.name === "" ||
        signup.email === "" ||
        signup.mobile === "" ||
        signup.password === ""
      ) {
        alert("Please fill all the feilds")
        return;
      }
  
      // Validate email field
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(signup.email)) {
        toast.error("Please enter a valid email address: xyz@gmail.com", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
  
      // Validate mobile field
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(signup.mobile)) {
        toast.error("Please enter  10 digit mobile number.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
  
      try {
        const response = await SignupApi({
          name: signup.name,
          email: signup.email,
          mobile: signup.mobile,
          password: signup.password,
        });
  
        if (response) {
          toast.success("Signup successfully", {
            // position: toast.POSITION.TOP_RIGHT,
          });
          
          localStorage.setItem('token', response.token);
          navigate("/Dashboard");
        }
      } catch (error) {
        toast.error("Signup Failed", {
         
        });
      }
    };
  



  return (
    
    <div>
    <ToastContainer/>
        <div class="container mt-5">
      <div class="row">
        <div class="col">
          <Sidebar />
        </div>

        <div class="col align-self-center">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label fs-6 fw-medium" >
                First Name
              </label>
              <input class="form-control" type="text" placeholder="First Name" aria-label="default input example"   value={signup.name}
                        onChange={signupNameChange}/>
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
                value={signup.email}
                        onChange={signupEmailChange}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label fs-6  fw-medium">
                Phone Number
              </label>
              <input
                type="text"
                class="form-control "
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter Number"
                value={signup.mobile}
                        onChange={signupMobileChange}
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
                value={signup.password}
                onChange={signupPasswordChange}
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
            <button  class="btn btn-primary" onClick={signupSubmit}>
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