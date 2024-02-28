import { useContext } from "react";
import toast from "react-hot-toast";
import { CartContext } from "../App";
import { deleteShoppingCart, removeFromDb } from "../utils/FakeDB";
import CartCalculation from "./CartCalculation";
import CartTable from "./CartTable";
import Checkout from "./Checkout";
import Profile from "./Profile";
import TopMenu from "./TopMenu";

const CartManagement = () => {
  // get all carts
  const [carts, setCarts] = useContext(CartContext || []);

  // item removed to shopping cart using local storage
  const handleRemoveToCart = (id) => {
    const remaining = carts.filter((item) => item.id !== id);
    setCarts(remaining);
    removeFromDb(id);
    toast.error("Item Removed");
  };

  // clear all item form local storage
  const handleClearCart = () => {
    if (carts?.length > 0) {
      setCarts([]);
      deleteShoppingCart();
      toast.error("Removed All Item");
    }
  };

  return (
    <section className="space-y-3 border-r border-gray-300 px-2 lg:w-[45%] lg:px-4">
      {/* left side top menu bar */}
      <TopMenu />
      {/* left side profile and added customer */}
      <Profile />
      {/* show cart item with table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gradient-to-r from-purple-400/80 to-indigo-400/80 font-medium text-white lg:text-sm">
              <th className="p-0"></th>
              <th>Items</th>
              <th className="text-right">Unit Price</th>
              <th>Quantity</th>
              <th className="text-right">Total Price</th>
              <th className="p-0"></th>
            </tr>
          </thead>
          <tbody>
            {/* render table row to cart item */}
            {carts?.map((cart) => (
              <CartTable
                key={cart.id}
                cart={cart}
                RemoveToCart={handleRemoveToCart}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* cart calculation part */}
      <CartCalculation carts={carts} />
      {/* checkout part */}
      <Checkout clearCart={handleClearCart} />
    </section>
  );
};

export default CartManagement;
