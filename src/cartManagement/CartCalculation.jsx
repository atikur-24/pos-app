const CartCalculation = ({ carts, discount }) => {
  let subTotal = 0;
  let taxTotal = 0;
  let shippingTotal = 0;
  let quantityTotal = 0;
  //   const netTotal = subTotal + tax + shipping + discount;
  //   console.log(netTotal);

  if (carts) {
    for (const item of carts) {
      // sub total amount
      subTotal = subTotal + item.price * item.quantity;

      // total tax amount
      taxTotal = taxTotal + item.tax * item.quantity;

      // total shipping amount
      shippingTotal = shippingTotal + item.shipping;

      // total cart item quantity
      quantityTotal = quantityTotal + item.quantity;
    }
  }

  // net total amount
  const netTotal = subTotal + taxTotal + shippingTotal - discount;

  return (
    <div className="pt-2 text-sm text-gray-500 lg:pt-4">
      <div className="ml-auto w-1/2 divide-y-2 divide-gray-200">
        <div className="flex justify-between border-t-2 border-gray-200 py-1">
          <span className="mr-10 lg:mr-20">Sub Total</span>
          <span className="text-base font-medium text-gray-600">
            ${subTotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between py-1">
          <span className="mr-10 items-start lg:mr-20">TAX</span>
          <span className="text-base font-medium text-gray-600">
            ${taxTotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between py-1">
          <span className="mr-10 lg:mr-20">Shipping</span>
          <span className="text-base font-medium text-gray-600">
            ${shippingTotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between py-1">
          <span className="mr-10 lg:mr-20">Discount On Cart</span>
          <span className="text-base font-medium text-gray-600">
            ${discount}
          </span>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between rounded bg-[#E1EAF9] px-2 py-2 text-[#3674D9] lg:py-2.5">
        <span>Products Count ({quantityTotal})</span>
        <span className="mr-8 text-base font-semibold tracking-wide lg:text-lg">
          Total
        </span>
        <span className="text-base font-semibold tracking-wide lg:text-lg">
          ${netTotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartCalculation;
