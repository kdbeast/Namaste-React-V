const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, locality, areaName } =
    resData.info;

  return (
    <div className="m-2 p-4 w-[300px] rounded-lg bg-gray-200 hover:bg-gray-400">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold text-xl py-4">{name}</h3>
      <h4 className="text-md font-bold text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-md font-bold text-sm">{avgRating} Stars⭐</h4>
      <h4 className="text-md font-bold text-sm">{costForTwo}</h4>
      <h4 className="text-md font-bold text-sm">{locality || areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
