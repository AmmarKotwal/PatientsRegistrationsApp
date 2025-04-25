import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registrations from './Components/Registrations';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element= {<Registrations />} />
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
