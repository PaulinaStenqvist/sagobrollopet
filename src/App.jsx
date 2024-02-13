import { Route, Routes } from "react-router-dom";
import './App.css';
import  Header  from "./components/header/Header";
import  About  from "./components/about/About";
import  Portfolio  from "./components/portfolio/Portfolio";
import  Contact  from "./components/contact/Contact";
import  Login  from "./components/login/Login";

function App() {
  return (  
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
