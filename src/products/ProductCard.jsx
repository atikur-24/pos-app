import { PiWarningOctagonBold } from "react-icons/pi";

const ProductCard = ({ product }) => {
  const { id, name, image, price, quantity } = product || {};
  return (
    <div className="pointer-events-auto relative flex w-full cursor-pointer flex-col rounded border border-gray-300 text-[13px] text-gray-500 transition-all active:opacity-70">
      <div className="h-[145px] transition-all 2xl:h-[164px]">
        <img className="h-full w-full object-contain" src={image} alt={name} />
      </div>
      {quantity === 0 && (
        <PiWarningOctagonBold className="absolute right-2 top-2 text-base text-red-600/90" />
      )}
      <div className="py-1 text-center md:py-1.5">
        <p className="font-semibold">${price}</p>
        <hr className="py-0.5" />
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
