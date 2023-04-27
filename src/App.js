import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import TurtleSightingApp from './components/TurtleSightingApp/TurtleSightingApp';
import DroneDeliveryApp from './components/DroneDeliveryApp/DroneDeliveryApp';
import SalesManagementApp from './components/SalesManagementApp/SalesManagementApp';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/turtle-sighting-app" element={<TurtleSightingApp />} />
          <Route path="/drone-delivery-app" element={<DroneDeliveryApp />} />
          <Route path="/sales-management-app" element={<SalesManagementApp />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
