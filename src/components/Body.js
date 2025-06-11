import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return(
        <div className="body-wrapper">
            <button className="btn" onClick={() => { setListOfRestaurants(listOfRestaurants.filter((res) => res.info.avgRating > 4.5))
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