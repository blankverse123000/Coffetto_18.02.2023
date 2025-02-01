import React from "react";
import About from "./About";
import NavBar from "./components/NavBar";
import Footer from "./Footer";
import Home from "./Home";
import Steps from "./Steps";
import Testimonial from "./Testimonial";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="header-border mb-4"></div>
      <Home />
      <About />
      <Steps />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
