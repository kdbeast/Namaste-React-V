import { IMG_CDN_URL } from "./../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-black text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-medium">{item.card.info.name}</span>
              <span className="font-medium">
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 py-4">
            <div className="absolute">
                <button className="p-2 mx-16 rounded-lg bg-black text-white">Add +</button>
                </div>
              <img
                src={IMG_CDN_URL + item.card.info.imageId}
                className="w-full"
              />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
