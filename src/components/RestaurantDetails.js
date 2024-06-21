import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "./Shimmerui";
import useRestaurant from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

//we need to fetch the api of restaurant menu list with the help of dynamic id

//so we will be using useEffect

const RestaurantMenu = () => {
	//how to read a dynamic url params
	const { id } = useParams();

	const [menuList, restName] = useRestaurant(id);
	const dispatch = useDispatch();   //we need this to dispatch the action

	const handleAddCartItem = (item) => {
		console.log(item);
		dispatch(addToCart(item));
	}
	return !restName ? (
		<Shimmer />
	) : (
		<div className="m-5">
			<div className="font-serif font-extrabold text-4xl p-5 text-red-400 italic capitalize mt-3">
				<h1 align="center">{restName}</h1>
			</div>
			<div>
				<h1 className="font-bold font-mono text-4xl p-3 flex justify-center text-indigo-950">
					BROWSE CATEGORIES
				</h1>
				<div className="flex flex-wrap  shadow-lg ">
					{menuList?.map((item) => {
						return (
							<div
								className="w-80 p-2 m-5 mx-[22px] h-[460px] shadow-lg bg-pink-50 transition ease-in-out hover:-translate-y-1 hover:scale-90 hover:bg-pink-200"
								key={item?.card?.info?.id}>
								<img
									src={IMG_CDN_URL + item?.card?.info?.imageId}
									className="w-80 h-72"
									alt="Image not rendered"
								></img>
								<h3 className="font-bold text-xl p-3 m-3 capitalize font-serif truncate">
									{item?.card?.info?.name}</h3>
								<button onClick={()=>{handleAddCartItem(item)}} className="bg-green-500 w-24 h-10  font-bold border border-white hover:bg-green-700">Add Item</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default RestaurantMenu;
