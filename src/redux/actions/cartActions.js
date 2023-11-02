// actions/cartActions.js

export const fetchSingleData = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/product/${id}`);
   
      if (!response.ok) {
        throw new Error("failed fetch");
      }
      const data = await response.json();
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCT_FAILED,
        payload: error.message,
      });
    }
  };
};
export const addToCart = (product) => {
  return async (dispatch) => {
   
    console.log(product)
  };
};
