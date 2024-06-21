import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../utils/cartSlice';

const CartDetails = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items);
    const handleClearCart = ()=>{
        dispatch(emptyCart())
    }
    return (
        <>
            <div className='font-bold font-serif text-center text-2xl underline'>CartDetails</div>
            <div className='bg-red-600 w-24 h-8 border rounded-md hover:bg-red-800 cursor-pointer m-2 font-bold text-xl' onClick={handleClearCart}>Clear Cart</div>
            <div className='flex flex-wrap  shadow-lg '>
            {
                cartItems && 
                cartItems.map((item)=>(<CartItems key={item?.card?.info.id} {...item?.card?.info}/>))
            }
            </div>
        </>
    )
}

export default CartDetails