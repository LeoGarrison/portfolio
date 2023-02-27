import Project from "../../components/projects/Project";
import "./projects.css";

const Projects = ({projects}) => {
    return (
        <>
            <section className="projects">
                {
                    projects.map((project) => {
                        return <Project key={project.name} name={project.name} link={project.link} description={project.description} image={project.image} />
                    })
                }
            </section>
        </>
    )
}

export default Projects;
