import Box from "../assets/icons/empty-box.svg";

const EmptyCart = () => {
  return (
    <div className="flex w-full items-center gap-x-3 rounded bg-[#F3F3F3] px-2 py-3 text-gray-500">
      <img src={Box} alt="box" />
      <div className="">
        <h3 className="whitespace-nowrap text-lg font-medium">
          Your Cart Awaits.
        </h3>
        <p className="pt-1 text-xs">
          Please select a product from the list to add to your cart.
        </p>
      </div>
    </div>
  );
};

export default EmptyCart;
