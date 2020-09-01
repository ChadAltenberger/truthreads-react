import React from "react";
import HeaderComp from "./Components/HeaderComp";
import { FooterComp } from "./Components/FooterComp";
import { IntroComp } from "./Components/IntroComp";
import WelcomeComp from "./Components/WelcomeComp";
import ContactComp from "./Components/ContactComp";
import "./App.css";

function App() {
    return (
        <>
            <HeaderComp />
            <IntroComp />
            <WelcomeComp />
            <ContactComp />
            <FooterComp />
        </>
    );
}

export default App;
