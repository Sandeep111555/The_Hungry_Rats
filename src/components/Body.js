import { useState } from "react";
import Restaurantcard from "./RestaurantCard";
import { useEffect } from "react";
import Shimmer from "./Shimmerui";
import { Link } from "react-router-dom";
import { restrauntfilter } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurantList from "../utils/useRestaurantList";
import RestaurantNotFound from "./RestaurantNotFound";
import { SEARCH } from "../Constant";
// import UserContext from "../utils/UserContext";
// import { useContext } from "react";


const Body = () => {
	// const {user,setUser} = useContext(UserContext);
	const [searchInput, setsearchInput] = useState("");

	const searchFunction = () => {
		const getrestraunt = restrauntfilter(searchInput, allrestaurant);
		setFilteredRestaurant(getrestraunt);
	};

	const [filteredrestaurant, setFilteredRestaurant] = useState([]);

	const allrestaurant = useRestaurantList();

	useEffect(() => {
		setFilteredRestaurant(allrestaurant);
	}, [allrestaurant]);

	const isOnline = useOnline();

	if (!isOnline) {
		return <h1>Opses!!!! Seems like you are offline!!!!</h1>;
	}
	// not render component (Early return)
	if (!allrestaurant) return null;
	//if filtered restaurant is not found

	return allrestaurant.length == 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="flex justify-center  my-4 shadow-lg" >
				<div className="bg-white my-5 p-4 flex">
					<input
						type="text"
						className="focus:outline-none p-2 rounded-md w-[1000px] h-7 mb"
						placeholder="Search for restaurants and foods"
						value={searchInput}
						onChange={(e) => {
							setsearchInput(e.target.value);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") searchFunction();
						}}
					/>
					<button onClick={searchFunction} className="hover:scale-90">{SEARCH}</button>
				</div>
				{/* <input type="text" value={user.name} onChange={(e)=>{
					setUser({
						name:e.target.value,
						email:"sandeepgautam111555@gamil.com"
					})
				}}/> */}
			</div>
			<div className="mx-5">

			<div className="flex flex-wrap shadow-lg" >
				{filteredrestaurant.length == 0 ? (
					<RestaurantNotFound />
				) : (
					filteredrestaurant.map((restraunt) => {
						return (
							<Link
								to={"/restaurant/" + restraunt.info.id}
								key={restraunt.info.id}
							>
								<Restaurantcard
									{...restraunt.info}
									key={restraunt.info.id}
									/>
							</Link>
						);
					})
				)}
			</div>
			</div>
		</>
	);
};
export default Body;


//prop drilling - passing props to children to children passing the props down the chain 