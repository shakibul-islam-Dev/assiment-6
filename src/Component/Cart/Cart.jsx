// import React, { use } from "react";

import { IoCheckmarkOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const Cart = ({ cart_item, cartsData, setCartsData }) => {
  const isAdded = cartsData.some((item) => item.id === cart_item.id);

  const handleBuy = () => {
    const isFind = cartsData.find((item) => item.id === cart_item.id);
    if (!isAdded) {
      setCartsData([...cartsData, cart_item]);
      toast.success("Item Added");
    }
    if (isFind) {
      toast.error("Items is already added");
      return;
    }
  };
  const {
    badge,
    billing_cycle,
    currency,
    description,
    features,

    // is_selected,
    icon_path,
    price,
    title,
  } = cart_item;

  const getBadge = () => {
    if (badge === "Best Seller") return "text-orange-600 bg-orange-300";
    if (badge === "Popular") return "text-purple-600 bg-gray-400";
    if (badge === "New") return "text-gree-600 bg-green-400";
  };
  // console.log(cart_item);

  return (
    <section className="Cart-body transition-all duration-300 hover:translate-y-2.5 ">
      <div className="relative h-full  mt-10 p-5 flex flex-col rounded-2xl bg-white shadow-sm">
        <div className="absolute top-4 right-4">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full animate-pulse ${getBadge(badge)}`}
          >
            {badge}
          </span>
        </div>
        <div className="iamge  ">
          <img src={icon_path} className="object-fit w-7 h-7" alt="" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-[16px] text-gray-500 font-normal">{description}</p>
        </div>
        <div className="mt-2 pb-3">
          <h2 className="text-3xl font-extrabold">
            {currency} {price}{" "}
            <span className="text-2xl font-normal text-gray-600">
              / {billing_cycle}
            </span>
          </h2>
          <ul className="flex justify-between mt-3 flex-col space-y-2 cursor-pointer ">
            {features?.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3  hover:text-purple-500 transition-colors "
              >
                <IoCheckmarkOutline className="text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => handleBuy(cart_item)}
          className={`btn w-full mt-4 rounded-full text-white font-extrabold p-3 transition-all ${
            isAdded
              ? "bg-green-500"
              : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
          }`}
        >
          {isAdded ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </section>
  );
};

export default Cart;
