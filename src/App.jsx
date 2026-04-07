import React, { Suspense } from "react";
import Navbar from "./Component/Navigation/Navbar";
import Footer from "./Component/Footer/Footer";
const getNavData = async () => {
  const res = await fetch("/navbar.json");
  return res.json();
};
const navgationData = getNavData();

const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Hello</h1>}>
        <Navbar navgationData={navgationData}></Navbar>
      </Suspense>

      <Footer></Footer>
    </div>
  );
};

export default App;
