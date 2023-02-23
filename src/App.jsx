import { useEffect, useState } from "react";

import hand from "./assets/Hand.png";
import star from "./assets/Star.png";

import oldBook from "./assets/OldBook.png";
import city from "./assets/City.png";
import clock from "./assets/Clock.png";
import mechanicalEye from "./assets/MechanicalEye.png";
import maw from "./assets/Maw.png";
import skeletalBook from "./assets/SkeletalBook.png";
import hourGlass from "./assets/Hourglass.png";

import "./App.css";

const About = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header></header>
            <nav></nav>
            <main>
                <section id="about">
                    <section id="textbox">
                    </section>
                    <section id="scene">
                        <img id="city" src={city} style={{top: scrollPosition * -0.5}} />
                        <img id="clock" src={clock} style={{top: scrollPosition * 0.6}} />
                    </section>
                    <img id="mechanicalEye" src={mechanicalEye} />
                </section>
                <section id="maw"></section>
                <section id="projects">
                    
                </section>
            </main>
            <footer id="contact">
                
                <img id="skeletalBook" src={skeletalBook} /> 
                <img id="hourGlass" src={hourGlass} />
            </footer>
        </>
    )
}

export default About;
