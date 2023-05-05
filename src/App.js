import React from "react";
import "./App.css";
import BrandsIntegration from "./components/BrandsIntegration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopFold from "./components/TopFold";
import InfoSection from "./components/InfoSection";
import TrendingNfts from "./components/TrendingNfts";
import NavBar from "./components/NavBar";


const App = () => {
  return (
  <div className="max-width">
    <NavBar />
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