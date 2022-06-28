import React from "react";
import Error404 from "../components/404";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <Error404 />
      <Footer />
    </>
  );
};

export default Error;
