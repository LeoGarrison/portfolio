import "./project.css";

const Project = ({name, description, image}) => {
    return (
        <>
            <section className="project">
                <section className="project-card">
                    <img className="project-image" src={image} />
                    <section className="project-information">
                        <h2 className="project-name">{name}</h2>
                        <article className="project-description">{description}</article>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Project;
