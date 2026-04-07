import React from "react";
import { toast } from "react-toastify";
import { BsFillCartXFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
// { cartsData, setCartsData }
const CartModal = ({ cartsData, setCartsData }) => {
  const handleRemove = (id) => {
    const updateCart = cartsData.filter((item) => item.id !== id);
    toast.error("Item Removed");
    setCartsData(updateCart);
  };
  const handlePaymets = () => {
    setCartsData([]);
  };
  const totalPrice = cartsData.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="container mx-auto mt-20 mb-20">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cartsData.length === 0 ? (
        <div className=" p-10 flex items-center flex-col justify-center">
          <h1 className="text-2xl font-extrabold text-gray-500 mb-10">
            Nothing Added Yet
          </h1>
          <BsFillCartXFill className="text-9xl text-gray-400" />
        </div>
      ) : (
        ""
      )}
      <div>
        {cartsData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between flex-row px-20 pt-15 items-center"
          >
            <div className="flex gap-5 items-center mb-10">
              <img src={item.icon_path} className="w-7 h-7 object-fit" alt="" />
              <div>
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p className="text-gray-600 font-semibold">
                  {item.currency} {item.price}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="btn btn-error gap-4"
            >
              <FaTrashAlt /> Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between p-3 items-center">
        <h2 className="text-2xl font-extrabold mb-10">Total:</h2>
        <h2 className="text-2xl font-extrabold mb-10">${totalPrice}</h2>
      </div>

      <button
        onClick={handlePaymets}
        className="w-full btn btn-primary rounded-full font-bold"
      >
        Proceed To Chectout
      </button>
    </section>
  );
};

export default CartModal;
