import skeletalBook from "/src/assets/SkeletalBook.png";
import hourGlass from "/src/assets/Hourglass.png";

import "./contact.css";

const Contact = () => {
    return (
        <>
            <section id="contact">
                <img id="skeletalBook" src={skeletalBook} /> 
                <img id="hourGlass" src={hourGlass} />
            </section>
        </>
    )
}

export default Contact;
