import { useContext } from "react";
import toast from "react-hot-toast";
import { CartContext, ProductContext } from "../App";
import { addToDb } from "../utils/FakeDB";
import ProductCard from "./ProductCard";
import Search from "./Search";

const Products = () => {
  // get all products and carts
  const products = useContext(ProductContext || []);
  const [carts, setCarts] = useContext(CartContext || []);

  // item add to shopping cart using local storage
  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = carts.find((existingItem) => existingItem.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...carts, product];
    } else {
      const rest = carts.filter(
        (existingItem) => existingItem.id !== product.id,
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCarts(newCart);
    addToDb(product.id);
    toast.success("Item Added To Cart");
  };

  return (
    <section className="bg-[#f4f6f8] lg:w-[55%]">
      {/* search product */}
      <Search />
      {/* render product card grid */}
      <div className="mx-2 grid grid-cols-2 gap-1 pt-2 md:grid-cols-3 md:gap-2 lg:mx-4 lg:grid-cols-4 lg:gap-3 xl:grid-cols-5">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            updateCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
