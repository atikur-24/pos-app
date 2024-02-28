import CartItem from "./CartItem";
import Profile from "./Profile";
import TopMenu from "./TopMenu";

const CartManagement = () => {
  return (
    <section className="space-y-3 border-r border-gray-300 px-2 lg:w-2/5 lg:px-4">
      <TopMenu />
      <Profile />
      <CartItem />
    </section>
  );
};

export default CartManagement;
