import { useState, useEffect } from "react";

import oldBook from "/src/assets/OldBook.png";
import city from "/src/assets/City.png";
import portcullis from "/src/assets/Portcullis.png";
import clock from "/src/assets/Clock.png";
import hourHand from "/src/assets/HourHand.png";
import mechanicalEye from "/src/assets/MechanicalEye.png";

import "./about.css";

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
            <section id="about">
                <section id="textbox">
                </section>
                <section id="scene">
                    <img id="portcullis" src={portcullis} style={{top: scrollPosition * -0.7}} />
                    <img id="city" src={city} style={{top: scrollPosition * -0.5}} />
                    <div id="clock-container" style={{top: scrollPosition * 0.6}}>
                        <img id="clock" src={clock} />
                        <img id="hourHand" src={hourHand} style={{transform: `rotate(${scrollPosition}deg)`}}/>
                    </div>
                </section>
                <img id="mechanicalEye" src={mechanicalEye} />
            </section>
        </>
    )
}

export default About;
