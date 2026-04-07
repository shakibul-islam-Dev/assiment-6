import React from "react";

const Step = () => {
  return (
    <section className="container mx-auto mt-25 space-y-4 p-10 felx  text-center items-center gap-10 flex-col">
      <h1 className="text-5xl font-bold">Get Started in 3 Steps</h1>
      <p className="txt-2xl text-gray-500">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-10">
        <User></User>
        <Package></Package>
        <Rocket></Rocket>
      </div>
    </section>
  );
};
const User = () => {
  return (
    <div className="container relative flex flex-col items-center justify-center shadow-2xl space-y-4 p-4 text-center ">
      <span className=" absolute top-1 right-2 w-10 h-10 bg-[#4F39F6] rounded-full flex items-center justify-center text-white">
        01
      </span>
      <img src="/assets/user.png" className="w-25 h-25 object-fit" alt="" />
      <h1 className="text-2xl font-bold">Create Account</h1>
      <p className="text-[16px] text-gray-500 mb-9">
        Sign up for free in seconds. No credit card <br />
        required to get started.
      </p>
    </div>
  );
};
const Package = () => {
  return (
    <div className="container relative flex flex-col items-center justify-center shadow-2xl space-y-4 p-4 text-center ">
      <span className=" absolute top-1 right-2 w-10 h-10 bg-[#4F39F6] rounded-full flex items-center justify-center text-white">
        02
      </span>
      <img src="/assets/package.png" className="w-25 h-25 object-fit" alt="" />
      <h1 className="text-2xl font-bold">Create Account</h1>
      <p className="text-[16px] text-gray-500 mb-9">
        Sign up for free in seconds. No credit card <br />
        required to get started.
      </p>
    </div>
  );
};
const Rocket = () => {
  return (
    <div className="container relative flex flex-col items-center justify-center shadow-2xl space-y-4 p-4 text-center ">
      <span className=" absolute top-1 right-2 w-10 h-10 bg-[#4F39F6] rounded-full flex items-center justify-center text-white">
        03
      </span>
      <img src="/assets/rocket.png" className="w-25 h-25 object-fit" alt="" />
      <h1 className="text-2xl font-bold">Create Account</h1>
      <p className="text-[16px] text-gray-500 mb-9">
        Sign up for free in seconds. No credit card <br />
        required to get started.
      </p>
    </div>
  );
};

export default Step;
