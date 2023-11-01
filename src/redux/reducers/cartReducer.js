const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Check if the item is already in the cart and update the quantity
        const updatedCartItems = [...state.cartItems];
        const existingItem = updatedCartItems.find((item) => item.id === action.payload.id);
  
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          updatedCartItems.push({ ...action.payload, quantity: 1 });
        }
  
        return { ...state, cartItems: updatedCartItems };
  
      // Handle other cart-related actions (e.g., REMOVE_FROM_CART, UPDATE_QUANTITY) here
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  