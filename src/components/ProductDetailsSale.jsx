import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { saledata } from "./SaleData";

function ProductDetailsBags() {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count >= 10) {
      toast.dark("you cannot enter more than 10");
      //setDress((dress)+1);
      setCount(10);
    } else {
      setCount(count + 1);
    }
    //setDress(dress+1)
  };

  const subtract = () => {
    if (count <= 10) {
      toast.dark("you cannot enter less than 0");
      //setDress((dress)-1);
      setCount(0);
    } else {
      setCount(count - 1);
    }
    //  setDress(dress-1)
  };
  const [saleproduct, setSaleProduct] = useState({});

  const params = useParams();
  useEffect(() => {
    const data = saledata.filter((selected) => selected.id == params.id);
    setSaleProduct(data[0]);
  }, []);

  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-6 text-center">
            <img src={saleproduct.image} height="500px" width="500px" />
          </div>
          <div className="col-lg-4">
          <h2 className="blink1">{saleproduct.title1}</h2>
            <h2>{saleproduct.title2}</h2>
            <small style={{ color: "darkslategrey" }}>
              Printed Embroidered Light Khaddar | Top Bottoms Dupatta
            </small>
            <p>
              <del>{saleproduct.price1}</del>&nbsp; &nbsp;
              <ins style={{ color: "red" }}>{saleproduct.price2}</ins>{" "}
            </p>

            <small style={{ color: "darkslategrey" }}>
              Availability: <i style={{ color: "green" }}>In stock</i>
            </small>
            <br />
            <small style={{ color: "darkslategrey" }}>SKU: BLK22420</small>
            <br />
            <br />
            <div className="d-flex">
              <button className="btn1" onClick={add}>
                +
              </button>
              <h1 className="mx-1 my-3">{count}</h1>
              <button className="btn2" onClick={subtract}>
                -
              </button>
              <button type="button" class="button">
                <b> + Add to Cart </b>
              </button>
            </div>
            <br />

            <emb style={{ color: "darkslategrey" }}>Details</emb>
            <hr />
            <emb style={{ color: "darkslategrey" }}>{saleproduct.descriptions}</emb>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsBags;
