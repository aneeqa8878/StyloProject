import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [productData, setProductData] = useState({
    productName: "",
    articleName: "",
    discountedPercen: "",
    originalPrice: "",
    discountedPrice: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/product`, productData);
    setProductData({
      productName: "",
      articleName: "",
      discountedPercen: "",
      originalPrice: "",
      discountedPrice: "",
    });
  };

  const handleChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const {
    productName,
    articleName,
    discountedPercen,
    originalPrice,
    discountedPrice,
  } = productData;

  return (
    <div className="container mb-4">
      <h2 class="h1-responsive font-weight-bold text-center my-2 mx-4">
        ProductDetails
      </h2>{" "}
      <div class="row-responsive mt-4 my-2 mx-2">
        <div class="col-md-9 mb-md-0 mb-5">
          <form onSubmit={onSubmit}>
            <div class="row">
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="productName" class="">
                    Products Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={productName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="articleName" class="">
                    ArticleName
                  </label>
                  <input
                    type="text"
                    name="articleName"
                    value={articleName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="discountedPercen" class="">
                    DiscountedPercen
                  </label>
                  <input
                    type="text"
                    name="discountedPercen"
                    value={discountedPercen}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="originalPrice" class="">
                    OriginalPrice
                  </label>
                  <input
                    type="text"
                    name="originalPrice"
                    value={originalPrice}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="discountedPrice" class="">
                    Discount Price
                  </label>
                  <input
                    type="text"
                    name="discountedPrice"
                    value={discountedPrice}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div class=" text-md-left mt-2">
              <button class="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
