const CartCalculation = ({ carts }) => {
  let subTotal = 0;
  let taxTotal = 0;
  let shipping = 0;
  //   const netTotal = subTotal + tax + shipping + discount;
  //   console.log(netTotal);

  if (carts) {
    for (const item of carts) {
      // sub total amount
      subTotal = subTotal + item.price * item.quantity;

      // total tax amount
      taxTotal = taxTotal + item.tax * item.quantity;

      // total shipping amount
      shipping = shipping + item.shipping;
    }
  }

  //   console.log(netTotal);
  return (
    <div className="flex flex-col items-end pt-2 text-sm text-gray-500 lg:pt-4">
      <div>
        <span>Sub Total</span>
        <span className="text-base font-medium text-gray-600">
          ${subTotal.toFixed(2)}
        </span>
      </div>
      <div>
        <span>TAX</span>
        <span className="text-base font-medium text-gray-600">
          ${taxTotal.toFixed(2)}
        </span>
      </div>
      <div>
        <span>Shipping</span>
        <span className="text-base font-medium text-gray-600">
          ${shipping.toFixed(2)}
        </span>
      </div>
      <div>
        <span>Discount On Cart</span>
        {/* <span className="text-base font-medium text-gray-600">
          ${discount.toFixed(2)}
        </span> */}
      </div>
    </div>
  );
};

export default CartCalculation;
