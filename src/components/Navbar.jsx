import React from "react";
import "./Prenav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="row">
      <div class="col  text-center">
        <Link class="" to="/">
          <img
            src="https://stylo.pk/cdn/shop/files/Logo-200X100_6f449994-79a7-467d-95c6-ac0903ba695d_140x.png?v=1646139171"
            width={100}
            height={60}
          />
        </Link>

        <div className="navbar-nav flex-row-reverse bd-highlight pb-1">
          <Link  class="me-4 text-reset" to ="/contactus">
            <i class="fas fa-envelope mx-1 fa-2x"></i>
          </Link>

          <Link  class="me-4 text-reset" to ="/contactus">
            <i class="fas fa-phone mx-1 fa-2x"></i>
          </Link>
          <Link  class="me-4 text-reset" to ="/contactus">
            <i class="fas fa-map-marker-alt mx-1 fa-2x" />
          </Link>
        </div>
      </div>
      <hr></hr>

      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            <ul class="navbar-nav mb-2 mb-lg-0 gap-3">
              <li class="nav-item">
              <Link
                  className="nav-link active sale-link" // Added class 'sale-link'
                  aria-current="page"
                  to="/sale"
                >
                  <b>Sale</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/womenshoes">
                  <b>Women Shoes</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/womenapparels">
                  <b>Women Apparels</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/bags">
                  <b>Bags</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/kids">
                  <b>Kids</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/accessories">
                  <b>Accessories</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/beauty">
                  <b>Beauty</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contactus">
                  <b>Contact Us</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  <b>Login</b>
                </Link>
                
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/signup">
                  <b>Signup</b>
                </Link>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
