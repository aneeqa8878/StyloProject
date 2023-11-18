import React, { useState } from "react";
import { saledata } from "./SaleData";
import { Link } from "react-router-dom";



function Sale() {
  const [data, setData] = useState(saledata);

  return (
    <div>
      <div className="container d-flex flex-wrap justify-content-center  gap-5 mt-5">
        {data.map((item) => {
          return (
            <div class="card" style={{ width: "15rem" }}>
              <img src={item.image} alt="Card image cap" height={"320px"} width={"256px"} />
              <div class="cover">
              <Link
                  className="btn btn-light ml-5"
                  to={`/sale/${item.id}`}
                >
                  <span>Quick View</span>
                </Link>

                <Link
                  className="btn btn-light ml-5"
                  to={`/sale/${item.id}`}
                >
                  <span>Quick Shop</span>
                </Link>
              </div>

              <div class="text-block2">
                <h6>{item.title1}</h6>
              </div>
              <h5 class="card-title fs-6 w-10 text-center mt-2">{item.title2}</h5>
              <p class="card-text text-center">
                <del style={{ color: "gray" }}>{item.price1}</del>{" "}
                <emb style={{ color: "red" }}>{item.price2}</emb>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sale;
