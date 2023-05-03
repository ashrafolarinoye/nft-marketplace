import React from "react";
import "./App.css";
import BrandsIntegration from "./components/BrandsIntegration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopFold from "./components/TopFold";
import InfoSection from "./components/InfoSection";
import TrendingNfts from "./components/TrendingNfts";

const App = () => {
  return (
  <div>
    <Header />
    <TopFold />
    <BrandsIntegration />
    <TrendingNfts />
    <InfoSection />
    <Footer />
  </div>
  );
};

export default App;