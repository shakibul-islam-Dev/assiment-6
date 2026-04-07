import React, { Suspense } from "react";
import Navbar from "./Component/Navigation/Navbar";
import Footer from "./Component/Footer/Footer";
import Banner from "./Component/Banner/Banner";
import Rating from "./Component/Rating/Rating";
import Carts from "./Component/Cart/Carts";
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

const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Hello</h1>}>
        <Navbar navgationData={navgationData}></Navbar>
      </Suspense>
      <Banner bannerData={bannerData}></Banner>
      <Rating starsDatas={starsDatas}></Rating>
      <Carts cartsList={cartsList}></Carts>

      <Footer></Footer>
    </div>
  );
};

export default App;
