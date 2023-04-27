import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import CaseStudy from './components/CaseStudy/CaseStudy';
import { projectData } from './data/project-data';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study/:id" element={<CaseStudy projectData={projectData} />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
