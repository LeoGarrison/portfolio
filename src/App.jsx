import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

import "./App.css";

const about = {
    name: "Leo Garrison",
    description: "Hello, I'm a prospective frontend developer. I recently graduated with Computer Science B.S. I'm inexperienced, but I'm improving everyday. I'm passionate about frontend development, because I love the artistic side of programming. I'm still currently actively developing this portfolio, but if it interested you, my contacts are at the bottom. Feel free to message me, I'll definetely respond within a day, unless under some extrodinary circumstance."
}

import dragonTree from "./assets/DragonTree.png";
import skeletonSoldier from "./assets/SkeletonSoldier.png";

const projects = [
    {
        name: "Project One",
        link: "link",
        description: "description",
        image: dragonTree
    },
    {
        name: "Project Two",
        link: "github",
        description: "description",
        image: skeletonSoldier
    }
]

const contacts = [
[
    {
        name: "Email",
        link: "leogarrison99@gmail.com"
    },
    {
        name: "GitHub",
        link: "github.com/LeoGarrison"
    },
    {
        name: "LinkedIn",
        link: "linkedin.com/in/leo-g-852684241"
    }
]
]

const App = () => {
    return (
        <>
            <About name={about.name} description={about.description} />
            <Projects projects={projects} />
            <Contact contacts={contacts} /> 
        </>
    )
}

export default App;
