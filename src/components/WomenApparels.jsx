import React, { useState } from "react";

import { Link } from "react-router-dom";
import { dress } from "./WomenApparelsData";


function WomenApparels() {
  const [data, setData] = useState(dress);
  return (
    <div>
      <div className="container d-flex flex-wrap justify-content-center  gap-5 mt-5">
        {data.map((item) => {
          return (
            <div class="card" style={{ width: "15rem" }}>
              <img src={item.image} alt="Card image cap" width={"255px"} height={"320px"} />
              <div class="cover">
              <Link
                  className="btn btn-light ml-5"
                  to={`/womenapparels/${item.id}`}
                >
                  <span>Quick View</span>
                </Link>

                <Link
                  className="btn btn-light ml-5"
                  to={`/womenapparels/${item.id}`}
                >
                  <span>Quick Shop</span>
              
                </Link>
              </div>

              <div class="text-block1">
                <h6>{item.discountedPercen}</h6>
              </div>
              <h5 class="card-title fs-6 w-10 text-center mt-2">{item. articleName}</h5>
              <p class="card-text text-center">
                <del style={{ color: "gray" }}>{item.originalPrice}</del>{" "}
                <emb style={{ color: "red" }}>{item. discountedPrice}</emb>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WomenApparels;
