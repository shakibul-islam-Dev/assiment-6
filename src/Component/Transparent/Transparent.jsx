import React, { use } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const Transparent = ({ getTransparentData }) => {
  // Data fetch/use kora hochche
  const showData = use(getTransparentData);

  return (
    <section className="container mx-auto mt-20 p-6 md:p-10">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {showData?.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

const Cards = ({ item }) => {
  const { features, tagline, period, price, title, btnText, isPopular } = item;

  return (
    <div
      className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl border
      ${
        isPopular
          ? "bg-[#8B2CFF] text-white scale-105 z-10 shadow-purple-200"
          : "bg-white text-slate-900 border-gray-100 shadow-sm"
      }`}
    >
      {/* Most Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD3A5] text-[#D97706] px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-sm">
          Most Popular
        </div>
      )}

      {/* Title & Tagline */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p
          className={`text-sm mt-1 ${isPopular ? "text-purple-100" : "text-gray-500"}`}
        >
          {tagline}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span
          className={`text-lg ${isPopular ? "text-purple-100" : "text-gray-400"}`}
        >
          {period}
        </span>
      </div>

      {/* Features List */}
      <ul className="space-y-4 mb-10 grow">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-[15px]">
            <IoCheckmarkOutline
              className={`${isPopular ? "text-white" : "text-green-500"} text-xl shrink-0`}
            />
            <span className="leading-tight">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button
        className={`w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-95
        ${
          isPopular
            ? "bg-white text-[#8B2CFF] hover:bg-gray-50"
            : "bg-[#8B2CFF] text-white hover:bg-[#7A25E5]"
        }`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Transparent;
