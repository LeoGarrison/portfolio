import skeletalBook from "../../assets/SkeletalBook.png";
import hourglass from "../../assets/Hourglass.png";

import "./contact.css";

const Contact = ({contacts}) => {
    return (
        <>
            <section className="contact">
                <img className="contact-background" src={skeletalBook} />
                <section className="contact-information">
                    <section className="contact-information-left">
                        {
                            contacts.map((contact) => {
                                return [
                                    <p key={contact.name}>{contact.name}: {contact.link}</p>,
                                ]
                            })
                        }
                    </section>
                    <section className="contact-information-right">
                    </section>
                </section>
                <img id="hourglass" src={hourglass} />
            </section>
        </>
    )
}

export default Contact;
