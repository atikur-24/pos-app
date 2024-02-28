import { useState } from "react";
import productData from "../../public/products.json";
import ProductCard from "./ProductCard";
import Search from "./Search";

const Products = () => {
  const [products, setProducts] = useState(productData);
  return (
    <section className="w-3/5 bg-[#f4f6f8]">
      {/* search product */}
      <Search />
      <div className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-3 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
