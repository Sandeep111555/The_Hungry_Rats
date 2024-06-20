import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";  //we get reducer object from the cartSlice which is then passed to the store configuration
// we need to use configureStore from redux-toolkit

const store = configureStore({
    reducer:{
        cart: cartSlice,
    }
})

export default store;
