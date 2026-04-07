import React, { use } from "react";
import { CiPlay1 } from "react-icons/ci";

const Banner = ({ bannerData }) => {
  const banner = use(bannerData);
  // const { badge, title, description, primaryBtn, secondaryBtn, image } =
  //   bannerData.heroData;
  const title = banner.heroData.title;
  const description = banner.heroData.description;
  const bannderImage = banner.heroData.image;
  const primaryBtn = banner.heroData.primaryBtn;
  const secondaryBtn = banner.heroData.secondaryBtn;
  const badge = banner.heroData.badge;
  // console.log(banner.heroData);
  return (
    <section className="container mx-auto px-10 py-16 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
          <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
          {badge}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
          {title}
        </h1>

        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button className="px-8 py-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full shadow-lg hover:shadow-purple-200 transition-all cursor-pointer">
            {primaryBtn}
          </button>

          <button className="px-8 py-4 border-2 border-purple-200 text-purple-600 font-bold rounded-full flex items-center gap-2 hover:bg-purple-50 transition-all cursor-pointer">
            <CiPlay1 />
            {secondaryBtn}
          </button>
        </div>
      </div>

      <div className="flex-1 relative">
        <img
          src={bannderImage}
          alt="Hero Banner"
          className="w-full h-auto rounded-2xl object-cover"
        />

        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300 blur-[100px] opacity-20"></div>
      </div>
    </section>
  );
};

export default Banner;
