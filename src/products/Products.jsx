import { useContext } from "react";
import { ProductContext } from "../App";
import ProductCard from "./ProductCard";
import Search from "./Search";

const Products = () => {
  // get all products
  const products = useContext(ProductContext || []);

  return (
    <section className="bg-[#f4f6f8] lg:w-3/5">
      {/* search product */}
      <Search />
      <div className="mx-2 grid grid-cols-2 gap-1 pt-2 md:grid-cols-3 md:gap-2 lg:mx-4 lg:grid-cols-4 lg:gap-3 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
