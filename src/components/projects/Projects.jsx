import mechanicalEye from "/src/assets/MechanicalEye.png";
import hand from "/src/assets/Hand.png";
import star from "/src/assets/Star.png";

import dragonTree from "/src/assets/DragonTree.png";
import skeletonSoldier from "/src/assets/SkeletonSoldier.png";

import maw from "/src/assets/Maw.png";

import Project from "/src/components/projects/Project";
import "./projects.css";

const Projects = () => {
    return (
        <>
            <section id="projects">
                <section id="deep-sea">
                    <Project name={"one"} description={"description"} image={dragonTree} />
                    <Project name={"two"} description={"description"} image={skeletonSoldier} />
                    <img id="maw" src={maw} />
                </section>
            </section>
        </>
    )
}

export default Projects;
