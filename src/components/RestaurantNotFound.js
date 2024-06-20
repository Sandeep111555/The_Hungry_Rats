import restraurantnotfound from "../Assets/img/restaurantnotfound.jpeg"
const RestaurantNotFound = () => {
	return  (
        <>
        <div className="flex items-center">
            <img src={restraurantnotfound} alt="Not rendered" />
            <h1 className="font-serif text-3xl font-bold text-pink-700">Sorry Restaurant Not Found!</h1>
        </div>
        </>
    )
};
export default RestaurantNotFound;


import React from 'react'