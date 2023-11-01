import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
const storeData = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`,login)
localStorage.setItem("token",storeData.data.token)   
if(storeData.data.status===403){
      toast.warning(storeData.data.message)
    }
    else{
      navigate("/");
    }
      
     setLogin({
      email:"",
      password:""
     }) 
   
  };

  const handleChange = (e) => {
    setLogin((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const { email, password } = login;

  return (
    <div>
      <section class="h-100 gradient-form" style={{ backgroundcolor: "#eee;" }}>
        <div class="container py-3 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                  
                      <div class="text-center mb-2">
                        <img
                          src="https://stylo.pk/cdn/shop/files/Logo-200X100_6f449994-79a7-467d-95c6-ac0903ba695d_140x.png?v=1646139171"
                          width={100}
                          height={60}
                        />
                        <h4 class="mt-4 mb-5 pb-1">We are The Dream Weavers</h4>
                      </div>

                      <form onSubmit={onSubmit}>
                        <p>Please login to your account</p>

                        <div class="form-outline mb-4">
                          <input
                           type="email"
                            name="email"
                            value={email}
                            class="form-control"
                            placeholder="Username or Email"
                            onChange={handleChange}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                         type="password"
                            name="password"
                            value={password}
                            class="form-control"
                            placeholder="Password"
                            onChange={handleChange}
                          />
                        </div>

                        <div class="text-center pt-1 mb-3 pb-1">
                          <button className="button3">LOG IN</button>
                        </div>
                        <div class="text-center mt-3  pb-1">
                          <a class="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2 mt-2">Don't have an account?</p>
                          <Link class="fw-bold text-body mt-2" to={`/signup`}>
                            <u>Sign up</u>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">
                        Stylo - Your Fashion Destination for Every Occasion
                      </h4>
                      <p class="small mb-0">
                        Stylo isn't just a brand; it's a lifestyle. We're
                        dedicated to helping you discover your unique style,
                        embrace your individuality, and feel confident in every
                        step you take. Our website is your portal to the latest
                        fashion updates, exclusive collections, and a seamless
                        shopping experience.
                      </p>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </section>
      
    </div>
    
  );
}

export default Login;
