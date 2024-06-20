import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_LIST } from "../Constant";

const useRestaurantList = ()=>{
    const [RestaurantList,setRestaurantList] = useState([]);

    useEffect(()=>{
        restList();
    },[]);

    
    async function restList(){
        const data = await fetch(
            FETCH_RESTAURANT_LIST
        );
        const json = await data.json();
        json.data.cards.map((item)=>{
                if(item.card.card.id==="top_brands_for_you")
                    {
                        setRestaurantList(item.card.card.gridElements.infoWithStyle.restaurants)
                    }
        })
    }

    return RestaurantList;

}

export default useRestaurantList;