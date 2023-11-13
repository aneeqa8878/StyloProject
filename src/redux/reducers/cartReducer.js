 //cartReducer.js
 import{FETCH_PRODUCT_FAILED,FETCH_PRODUCT_LOADING,FETCH_PRODUCT_SUCCESS} from "../types/type"
 //Initial state
 const initialState = {
   count:0,
   data:null,
   loading:false,
   error:false
 };


 Reducer
 const cartReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'ADD_TO_CART':
       return {
         ...state,
         cartItems: [...state.cartItems, action.payload],
       };
     // Add more cases for other actions like removing items from the cart
   case FETCH_PRODUCT_LOADING:
   return{...state,data:null,loading:true,error:false}
   case FETCH_PRODUCT_SUCCESS:
     return{...state,data:action.payload,loading:false,error:false}
     case FETCH_PRODUCT_FAILED:
       return{...state,data:null,loading:false,error:true}
     default:
       return state;
   }
 };

 export default cartReducer;
