import "./App.css";
import About from "./Components/AboutMe/About";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/MySkills/Skills";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <div className="min-h-[calc(100vh-72px)] w-[97%] md:w-[95%] lg:w-[90%] 2xl:w-[70%] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
