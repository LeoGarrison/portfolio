import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

import "./App.css";
import aboutData from "./data/about.json";
import projectsData from "./data/projects.json";
import contactData from "./data/contacts.json";

const App = () => {
    return (
        <>
            <About name={aboutData.name} description={aboutData.description} />
            <Projects projects={projectsData} />
            <Contact contacts={contactData} /> 
        </>
    )
}

export default App;
