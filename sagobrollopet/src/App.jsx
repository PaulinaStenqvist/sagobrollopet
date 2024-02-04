import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Services } from './components/services/Services'; 
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      
      <Header  />
      <Home />
      <Services />
       <Footer />
    </div>
  );
}

export default App;