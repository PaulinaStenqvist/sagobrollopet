import './App.css';
import { ToDoWrapper } from './components/toDoList/ToDoWrapper';
//import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      
      <ToDoWrapper  />
      <ToDoWrapper  />
      <ToDoWrapper  />

      {/* <Footer /> */}
    </div>
  );
}

export default App;