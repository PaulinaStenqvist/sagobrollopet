import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
// import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Portfolio } from './components/portfolio/Portfolio';
import { Pricing } from './components/pricing/Pricing';
import { Contact } from './components/contact/Contact';
import { Login } from './components/login/Login';
//import { Services } from './components/services/Services'; 
// import { Footer } from './components/footer/Footer';


const App =() => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact>
          <Home/>
        </Route>
        <Route path="/about" component={About} exact>
          <About/>
        </Route>
        <Route path="/portfolio" component={Portfolio} exact>
          <Portfolio/>
        </Route>
        <Route path="/pricing" component={Pricing} exact>
          <Pricing/>
        </Route>
        <Route path="/contact" component={Contact} exact>
          <Contact/>
        </Route>
        <Route path="/login" component={Login} exact>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


    // <div className="App">
    //   <Header  />
    //   <Home />
    //   <Services />
    //   <Footer />
    // </div>