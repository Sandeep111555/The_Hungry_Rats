import { createSlice } from '@reduxjs/toolkit';

//here we need to create a slice for the cart which will contain name of the slice, initial state and reducers. 
//reducers will contain actions and the corresponding reducer functions

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{   
            addToCart: (state,action)=>{
                state.items.push(action.payload);
            },
            removeFromcart: (state,action)=>{
                state.items.pop();
            },
            emptyCart: (state,action)=>{
                state.items = [];
            }
    }
});

//we need to named export the actions which are addToCart,removeFromCart,emptyCart and default export the cartSlice


export const {addToCart,removeFromcart,emptyCart} = cartSlice.actions;

export default cartSlice.reducer;