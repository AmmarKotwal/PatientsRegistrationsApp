import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registrations from './Components/Registrations';
import ShowData from './Components/ShowData';
import Navbar from './Components/Navbar';


function App() {
  return (
       <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Registrations />} />
        <Route path="/show" element= {<ShowData />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
