import React, { StrictMode, Suspense, useState } from "react";

import Navbar from "./Component/Navigation/Navbar";
import Footer from "./Component/Footer/Footer";
import Banner from "./Component/Banner/Banner";
import Rating from "./Component/Rating/Rating";
import Carts from "./Component/Cart/Carts";
import CartModal from "./Component/Cart/CartModal";
import Premium from "./Component/Cart/Premium";
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

      <div className="tabs tabs-box flex container justify-center mx-auto mt-10 items-center gap-4 text-[16px] font-bold">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full transition-all duration-300 tpx-6"
          aria-label="Products"
          onClick={() => {
            setactiveTab("products");
          }}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full transition-all duration-300  px-6"
          aria-label={`Cart (${cartsData.length})`}
          onClick={() => {
            setactiveTab("cart");
          }}
        />
      </div>

      {activetab === "products" && (
        <Carts
          cartsData={cartsData}
          setCartsData={setCartsData}
          cartsList={cartsList}
        ></Carts>
      )}
      {activetab === "cart" && (
        <CartModal
          cartsData={cartsData}
          setCartsData={setCartsData}
          // setCartsData={setCartsData}
        ></CartModal>
      )}

      <Footer></Footer>
    </div>
  );
};

export default App;
