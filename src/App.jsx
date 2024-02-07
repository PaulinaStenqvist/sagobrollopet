import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
// import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
//import Services from './components/services/Services'; 
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes> 
        {/* <Route path="/" element={<Home />} exact /> */}
        <Route path="/about" element={<About />} exact />
        <Route path="/portfolio" element={<Portfolio />} exact />
        <Route path="/pricing" element={<Pricing />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </Router>
  );
  <Footer />

}


export default App;


    // <div className="App">
    //   <Header  />
    //   <Home />
    //   <Services />
    //   <Footer />
    // </div>