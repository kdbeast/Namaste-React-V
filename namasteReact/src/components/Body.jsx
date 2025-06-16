import RestaurantCard from "./RestaurantCard.jsx";
import resList from "../utils/mockData.js";

const Body = () => {
  return (
    <div className="body">
      <div className="filer">
        <button
          className="filter-btn"
          onClick={() => {
            
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.resId} />
        ))}
      </div>
    </div>
  );
};

export default Body;
