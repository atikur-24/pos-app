import { getShoppingCart } from "../utils/FakeDB";

export const productsAndCartData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  const savedCart = getShoppingCart();

  let carts = [];
  for (const id in savedCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      foundProduct.quantity = savedCart[id];
      carts.push(foundProduct);
    }
  }
  return { products, carts };
};
