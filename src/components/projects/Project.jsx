import "./project.css";

const Project = ({name, link, description, image}) => {
    return (
        <>
            <section className="project">
                <img className="project-image" src={image} />
                <section className="project-information">
                    <h2 className="project-name">{name} - {link}</h2>
                    <article className="project-description">{description}</article>
                </section>
            </section>
        </>
    )
}

export default Project;
