import React from "react";
import HeaderComp from "./Components/HeaderComp";
import { FooterComp } from "./Components/FooterComp";
import { IntroComp } from "./Components/IntroComp";
import WelcomeReact from "./Components/WelcomeComp";
import AboutComp from "./Components/AboutComp";
import ContactComp from "./Components/ContactComp";
import "./App.css";

function App() {
  return (
    <>
      <HeaderComp />
      <IntroComp />
      <WelcomeReact />
      <ContactComp />
      <AboutComp />
      <FooterComp />
    </>
  );
}

export default App;
