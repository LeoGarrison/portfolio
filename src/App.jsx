import { useEffect, useState } from "react";

import hand from "./assets/Hand.png";
import star from "./assets/Star.png";

import maw from "./assets/Maw.png";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import "./App.css";

const App = () => {
    return (
        <>
            <About />
            <Contact /> 
        </>
    )
}

export default App;
