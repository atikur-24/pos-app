import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { CartContext, ProductContext } from "../App";
import { addToDb } from "../utils/FakeDB";
import Category from "./Category";
import ProductCard from "./ProductCard";
import Search from "./Search";

const Products = () => {
  // get all products and carts
  const products = useContext(ProductContext || []);
  const [carts, setCarts] = useContext(CartContext || []);
  const [searchQuery, setSearchQuery] = useState("");

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

  // handle search by product name
  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  // apply search sort to products
  const searchedProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="bg-[#f4f6f8] lg:w-[55%]">
      {/* search product */}
      <Search onSearch={handleSearch} />
      <Category />
      {/* render product card grid */}
      <div className="mx-2 grid grid-cols-3 gap-2 pt-2 md:grid-cols-4 md:gap-2 lg:mx-4 lg:gap-3 lg:pt-4 xl:grid-cols-5">
        {searchedProducts?.map((product) => (
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
