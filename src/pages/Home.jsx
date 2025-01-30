import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Services from "../components/Services";
import Location from "../components/Location";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <Location />
      <Footer />
    </>
  );
};

export default Home;
