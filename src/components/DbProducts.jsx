import axios from "axios";
import React, { useEffect, useState } from "react";

function DbProducts() {
  const [dbproducts, setDbProducts] = useState([]);

  const getdbProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/product`);
    setDbProducts(response.data.products);
  };

  useEffect(() => {
    getdbProducts();
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Article</th>
            <th scope="col">Discount %</th>
            <th scope="col">Original Price</th>
            <th scope="col">Discount Price</th>
           
          </tr>
        </thead>
        <tbody>
          {dbproducts.map((item) => {
          return(
            <tr>
              <th scope="row">{item.productName}</th>
              <th scope="row">{item.articleName}</th>
              <td>{item.discountedPercen}</td>
              <td>{item.originalPrice}</td>
              <td>{item.discountedPrice}</td>
             
            </tr>
          )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DbProducts;
