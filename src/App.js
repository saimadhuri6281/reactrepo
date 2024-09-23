import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Game from './Pages/Game';
import Sports from './Pages/Sports';
import Jersy from './Pages/Jersy';

function App() {
  return (
    <div className='container-fluid'>
      <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} /> 
            <Route path='/about' element={<Aboutus />} /> 
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/game' element={<Game />} />
              <Route path='/sports' element={<Sports />} />
              <Route path='/jersy' element={<Jersy />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
