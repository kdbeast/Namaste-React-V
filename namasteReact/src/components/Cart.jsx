import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();


  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" text-center m-2 p-2">
      <h1 className="text-3xl font-bold ">Cart</h1>
      <div className="w-6/12 m-auto">
      <button className="p-2 m-2 bg-black text-white"
      onClick={handleClearCart}
      >Clear Cart</button>
      {cartItems.length === 0 && <p>Your cart is empty Add Items to the cart!</p>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
