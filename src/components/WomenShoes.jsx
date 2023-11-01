import React, { useState } from "react";
import { shoes } from "./WomenShoesData";
import { Link } from "react-router-dom";


function WomenShoes() {
  const [data, setData] = useState(shoes);
  return (
    <div>
      <div className="container d-flex flex-wrap  gap-5 mt-5">
        {data.map((item) => {
          return (
            <div class="card" style={{ width: "15rem" }}>
              <img src={item.image} alt="Card image cap" />
              <div class="cover">
                <Link
                  className="btn btn-light ml-5"
                  to={`/womenshoes/${item.id}`}
                >
                  <span>Quick View</span>
                </Link>

                <Link
                  className="btn btn-light ml-5"
                  to={`/womenshoes/${item.id}`}
                >
                  <span>Quick Shop</span>
                </Link>
              </div>

              <div class="text-block">
                <h6>{item.discountedPercen}</h6>
              </div>
              <h5 class="card-title fs-6 w-10 text-center">{item.articleName}</h5>
              <p class="card-text text-center">
                <del style={{ color: "gray" }}>{item.originalPrice}</del>{" "}
                <emb style={{ color: "red" }}>{item.discountedPrice}</emb>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WomenShoes;
