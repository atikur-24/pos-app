import { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartManagement from "./cartManagement/CartManagement";
import Products from "./products/Products";

// create context for easy manage state and provide product and cart data
export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  // load all products and cart data
  const { products, cartArray } = useLoaderData();
  const [carts, setCarts] = useState(cartArray);

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[carts, setCarts]}>
        <div className="flex flex-col lg:flex-row">
          <CartManagement />
          <Products />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
