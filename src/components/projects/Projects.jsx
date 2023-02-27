import mechanicalEye from "/src/assets/MechanicalEye.png";
import hand from "/src/assets/Hand.png";
import star from "/src/assets/Star.png";

import dragonTree from "/src/assets/DragonTree.png";
import skeletonSoldier from "/src/assets/SkeletonSoldier.png";

import maw from "/src/assets/Maw.png";

import Project from "/src/components/projects/Project";
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
