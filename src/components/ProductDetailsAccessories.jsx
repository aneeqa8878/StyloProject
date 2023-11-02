import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { accessories } from "./AccessoriesData";
import { toast } from "react-toastify";
import { connect } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from "../redux/actions/cartActions";



function ProductDetailsAccessories() {
  const dispatch=useDispatch()
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
  const cart = () => {
    dispatch(addToCart(product));
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
  const [product, setProduct] = useState({});

  const params = useParams();
  useEffect(() => {
    const data = accessories.filter((selected) => selected.id == params.id);
   // setProduct(data[0]);
   dispatch(fetchSingleData(id))
  }, [dispatch]);
  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-6 text-center">
            <img src={product.image} height="500px" width="500px" />
          </div>
          <div className="col-lg-4">
            <h2>{product.articleName}</h2>
            <small style={{ color: "darkslategrey" }}>
              Printed Embroidered Light Khaddar | Top Bottoms Dupatta
            </small>
            <p>
              <del>{product.originalPrice}</del>&nbsp; &nbsp;
              <ins style={{ color: "red" }}>{product.discountedPrice}</ins>{" "}
            </p>

            <small style={{ color: "darkslategrey" }}>
              Availability: <i style={{ color: "green" }}>In stock</i>
            </small>
            <br />
            <small style={{ color: "darkslategrey" }}>SKU: BLK22420</small>
            <br />
            <br />
            <div className="d-flex">
              <button className="btn btn-danger mx-1 my-3" onClick={add}>
                +
              </button>
              <h1 className="mx-1 my-3">{count}</h1>
              <button className="btn btn-primary mx-3 my-3" onClick={subtract}>
                -
              </button>
              <button type="button" class="button" onClick={()=>cart()}>
                <b> + Add to Cart </b>
              </button>
            </div>
            <br />

            <emb style={{ color: "darkslategrey" }}>Details</emb>
            <hr />
            <emb style={{ color: "darkslategrey" }}>{product.description}</emb>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addToCart })(ProductDetailsAccessories);
