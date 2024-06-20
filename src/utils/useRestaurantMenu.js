import { FETCH_MENU_URL, REMAINING_MENU_URL } from "../Constant";
import { useEffect, useState } from "react";
const useRestaurantMenu = (resid) => {
	const [restaurant, setRestaurant] = useState(null);
	const [restName, setRestName] = useState("");
	useEffect(() => {
		getRestaurantInfo();
	}, []);

	async function getRestaurantInfo() {
		const data = await fetch(
			FETCH_MENU_URL + resid + REMAINING_MENU_URL
		);
		const json = await data.json();
		
		json.data?.cards.map((item) => {
			if (item.hasOwnProperty("groupedCard")) {
				setRestaurant(item.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
			}
		});

		setRestName(json.data?.cards[2].card.card.info.name);
	}
	return [restaurant, restName];

};

export default useRestaurantMenu;
