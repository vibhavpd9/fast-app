import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(()=>{fetchData();},
    []);
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return(
        listOfRestaurants.length === 0 ? <Shimmer/> : 
        <div className="body-wrapper">
            <button className="btn" onClick={() => {setListOfRestaurants(listOfRestaurants.filter((res) => res.info.avgRating > 4.2))
            }}>
            Top Rated Restaurants</button>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) =>(<RestuarantCard resData={restaurant} key={restaurant.info.id}/>
                ))}
            </div>
        </div>
    )
}

export default Body;