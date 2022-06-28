import React from "react";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contactus />
      <Footer />
    </>
  );
};

export default Home;
