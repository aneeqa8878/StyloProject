import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
const navigate=useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth`, data);
    
    if(password !== confirmpassword){
      toast.warning("Password Does not match!!")
    }
    else{
      setData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword:""
      });
      toast.success("User registered Successfuly")
      navigate("/login")
    }
    
  };
  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const { fname, lname, email, phone, password, confirmpassword } = data;
  return (
    <div>
      <section class="vh-100 gradient-custom">
        <div class="container py-1 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px", background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(10px)" }}>
                <div class="card-body p-2 p-md-5">
                  <h2 class="mb-4 pb-2 pb-md-0 mb-md-5">SignUp Form</h2>
                  <form onSubmit={onSubmit}>
                    <div class="row">
                      <div class="col-md-6 mb-2">
                        <div class="form-outline">
                          <label class="form-label" for="firstName">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="fname"
                            value={fname}
                            class="form-control form-control-lg"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-2">
                        <div class="form-outline">
                          <label class="form-label" for="lastName">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lname"
                            value={lname}
                            class="form-control form-control-lg"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-2 pb-2">
                        <div class="form-outline">
                          <label class="form-label" for="emailAddress">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            class="form-control form-control-lg"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-2 pb-2">
                        <div class="form-outline">
                          <label class="form-label" for="phoneNumber">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={phone}
                            class="form-control form-control-lg"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-2">
                        <div class="form-outline">
                          <label class="form-label" for="password">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            class="form-control form-control-lg"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-2">
                        <div class="form-outline">
                          <label class="form-label" for="confirmPassword">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="confirmpassword"
                            value={confirmpassword}
                            class="form-control form-control-lg"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="mt-4 pt-2">
                      <input class="button3" type="submit" value="Submit" />
                    </div>
                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2 mt-2">Already have an account?</p>
                      <Link class="fw-bold text-body mt-2" to={`/login`}>
                        <u>Login Here</u>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
