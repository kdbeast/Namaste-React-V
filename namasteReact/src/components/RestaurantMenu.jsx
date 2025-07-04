import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null)

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;

  // const { itemCards } =
    // resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  // console.log(itemCards);

  return (
    <div className="text-center bg-amber-400 p-1">
      <h1 className="text-3xl font-extrabold my-6">{name}</h1>

      <p className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          data={category.card.card}
          key={category.card.card.categoryId}
          showItems={index === showIndex ? true : false}
          setShowItems={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
