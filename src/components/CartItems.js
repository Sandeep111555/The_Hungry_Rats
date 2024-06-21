import { IMG_CDN_URL, STAR } from "../Constant";
import { useDispatch } from "react-redux";
import { removeFromcart } from "../utils/cartSlice";

const CartItems = ({ name, imageId, ratings, price, defaultPrice,id
}) => {

   const dispatch = useDispatch();

    const handleRemove = () => 
        {
            dispatch(removeFromcart(id))
        }
    return (
        <div className="w-80 p-2 m-5 mx-[22px] h-[460px] shadow-lg bg-pink-50 hover:bg-pink-200">
            <img
                src={IMG_CDN_URL + imageId}
                className="w-80 h-72"
                alt="not rendered"
            />
            <div className="flex flex-col ">
                <h2 className="font-bold text-xl p-3 m-3 capitalize font-serif truncate">
                    {name}
                </h2>
                <p className="font-bold mx-7 text-lg">Price: Rs {price ? (price / 100) : (defaultPrice / 100)}</p>
                <div className="p-3 mx-4 text-xl font-bold flex items-center gap-1">
                    <div className="text-black">{ratings.aggregatedRating.rating}</div>
                    <div className="rounded-full">
                        {STAR}
                    </div>
                    <button className="bg-red-500  w-28 h-8 mx-20 rounded-md hover:bg-red-700" onClick={handleRemove} >remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
