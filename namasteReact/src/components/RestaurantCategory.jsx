import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };

  return (
    <div>
      <div className="w-6/12 bg-purple-500 shadow-lg p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
