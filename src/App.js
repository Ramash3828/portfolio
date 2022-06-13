import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProjectsDetails from "./Components/Home/ProjectsDetails";
import AboutMe from "./Components/About/AboutMe";
import Education from "./Components/About/Education";
import Blogs from "./Components/Blogs/Bolgs";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/" element={<About />}>
                    <Route index element={<AboutMe />} />
                    <Route path="about-me" element={<AboutMe />} />
                    <Route path="education" element={<Education />} />
                </Route>
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project-details" element={<ProjectsDetails />} />
                <Route path="/blogs" element={<Blogs />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
