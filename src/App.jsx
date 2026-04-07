import React, { StrictMode, Suspense, useState } from "react";
import "./App.css";

import Navbar from "./Component/Navigation/Navbar";
import Footer from "./Component/Footer/Footer";
import Banner from "./Component/Banner/Banner";
import Rating from "./Component/Rating/Rating";
import Carts from "./Component/Cart/Carts";
import CartModal from "./Component/Cart/CartModal";
import Premium from "./Component/Cart/Premium";
import Step from "./Component/Step/Step";
import Transparent from "./Component/Transparent/Transparent";
import Flow from "./Component/workFlow/Flow";
const getNavData = async () => {
  const res = await fetch("/navbar.json");
  return res.json();
};
const navgationData = getNavData();

const getBannerdata = async () => {
  const res = await fetch("/banner.json");
  return res.json();
};
const bannerData = getBannerdata();

const getstatsData = async () => {
  const res = await fetch("/rating.json");
  return res.json();
};

const starsDatas = getstatsData();

const cartsAllData = async () => {
  const res = await fetch("/carts.json");
  return res.json();
};
const cartsList = cartsAllData();
//
const getTransparentDataLoad = async () => {
  const res = await fetch("/transparent.json");
  return res.json();
};
const getTransparentData = getTransparentDataLoad();

const getFooterData = async () => {
  const res = await fetch("/footer.json");
  return res.json();
};
const footerData = getFooterData();

const App = () => {
  const [activetab, setactiveTab] = useState("products");
  const [cartsData, setCartsData] = useState([]);

  return (
    <div>
      <Suspense fallback={<h1>Hello</h1>}>
        <Navbar navgationData={navgationData} cartsData={cartsData}></Navbar>
      </Suspense>
      <Banner bannerData={bannerData}></Banner>
      <Rating starsDatas={starsDatas}></Rating>
      <Premium></Premium>
      <div className="flex justify-center mx-auto mt-10">
        <div className="tabs tabs-boxed bg-gray-100 p-2 rounded-full inline-flex items-center gap-2">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab rounded-full px-8 transition-all duration-300 font-bold"
            aria-label="Products"
            onClick={() => setactiveTab("products")} // Case sensitivity check korun
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab rounded-full px-8 transition-all duration-300 font-bold"
            aria-label={`Cart (${cartsData.length})`}
            onClick={() => setactiveTab("cart")}
          />
        </div>
      </div>

      <div className="mt-8">
        {activetab === "products" && (
          <Carts
            cartsData={cartsData}
            setCartsData={setCartsData}
            cartsList={cartsList}
          />
        )}
        {activetab === "cart" && (
          <CartModal cartsData={cartsData} setCartsData={setCartsData} />
        )}
      </div>
      <Step></Step>
      <Transparent getTransparentData={getTransparentData}></Transparent>
      <Flow></Flow>
      <Footer footerData={footerData}></Footer>
    </div>
  );
};

export default App;
