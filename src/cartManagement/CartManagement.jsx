import { useContext } from "react";
import { CartContext } from "../App";
import CartTable from "./CartTable";
import Profile from "./Profile";
import TopMenu from "./TopMenu";

const CartManagement = () => {
  // get all carts
  const carts = useContext(CartContext || []);

  return (
    <section className="space-y-3 border-r border-gray-300 px-2 lg:w-2/5 lg:px-4">
      <TopMenu />
      <Profile />

      {/* show cart item with table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gradient-to-r from-purple-400/80 to-indigo-400/80 text-white lg:text-sm">
              <th></th>
              <th>Items</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carts?.map((cart) => (
              <CartTable key={cart.id} cart={cart} />
            ))}
          </tbody>
        </table>
      </div>

      {/* <CartCalculation /> */}
      {/* <Checkout /> */}
    </section>
  );
};

export default CartManagement;
