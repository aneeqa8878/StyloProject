import React from "react";
import { Link } from "react-router-dom";
import DbProducts from './DbProducts';

function Admin() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Link class="" to="/">
              <img
                src="https://stylo.pk/cdn/shop/files/Logo-200X100_6f449994-79a7-467d-95c6-ac0903ba695d_140x.png?v=1646139171"
                width={100}
                height={60}
              />
            </Link>
          </div>
          <div class="col-sm">
            <Link class="nav-link" to="/users">
              <b>Users</b>
            </Link>
          
          </div>
          <div class="col-sm">
            <Link class="nav-link" to="/quries">
              <b>Quries</b>
            </Link>
          
          </div>
          <div class="col-sm">
            <Link class="nav-link" to="/dbproducts">
              <b>DbProducts</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
