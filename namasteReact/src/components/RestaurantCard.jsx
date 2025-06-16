const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisine, image, rating, costText } = resData.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={image.url} />
      <h3>{name}</h3>
      <h4>{cuisine.map((item) => item.name).join(", ")}</h4>
      <h4>{rating.rating_text} Stars</h4>
      <h4>{costText.text}</h4>
      <h4>{resData.order.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;