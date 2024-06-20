import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';

const CartDetails = () => {
    const cartItems = useSelector(store => store.cart.items);

    return (
        <>
            <div className='font-bold font-serif text-center text-2xl underline'>CartDetails</div>
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