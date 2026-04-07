import React, { use, useState } from "react";
import Cart from "./Cart";

const Carts = ({ cartsList }) => {
  // const [toggle, setToggle] = useState(false);
  const cartsItems = use(cartsList);

  return (
    <section className="pricing-section container space-y-7 mx-auto mt-30 flex items-center flex-col">
      <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
      <p className="text-[16px text-center text-gray-500">
        Choose from our curated collection of premium digital products designed{" "}
        <br></br>
        to boost your productivity and creativity.
      </p>
      <div className="flex items-center gap-4">
        <button>Products</button>
        <button>Carts</button>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cartsItems.map((cart_item, index) => (
          <Cart key={index} cart_item={cart_item}></Cart>
        ))}
      </div>
    </section>
  );
};

export default Carts;
