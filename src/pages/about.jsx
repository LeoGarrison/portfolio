import skeletalBook from "../assets/SkeletalBook.png";
import hourGlass from "../assets/Hourglass.png";

const contact = () => {
    return (
        <>
            <section id="about">
                <section id="textbox">
                    <p>hello</p>
                </section>
                <section id="scene">
                    <img id="city" src={city} style={{ top: scrollPosition * -0.3 }} />
                    <img id="clock" src={clock} style={{ top: scrollPosition * 0.35 }} />
                </section>
                <img id="mechanicalEye" src={mechanicalEye} />
            </section>
        </>
    )
}

export default contact;
