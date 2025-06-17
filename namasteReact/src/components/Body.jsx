import RestaurantCard from "./RestaurantCard.jsx";
import resList from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.rating.rating_text > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.resId} />
        ))}
      </div>

    </div>
  );
};

export default Body;
