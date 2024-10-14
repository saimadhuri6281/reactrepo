import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Testimonials from './Components/Testimonials';
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './Pages/Game';
import Jersy from './Pages/Jersy'; 
import Sports from './Pages/Sports';
import Item from './Components/Item'; 
import Item1 from './Components/Item1'; 
import Item2 from './Components/Item2'; 
import Sidenav from './Components/Sidenav';
import Cart from './Components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className='container-fluid'>
      <Router>
        <div className="row">
          {window.location.pathname !== '/' && window.location.pathname !== '/signup' && (
            <div className="col-md-2">
              <Sidenav />
            </div>
          )}
          <div className="col-md-10">
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/testimonials' element={<Testimonials />} />
              <Route path='/about' element={<Aboutus />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/game' element={<Game />} />
              <Route path='/jersy' element={<Jersy />} />
              <Route path='/sports' element={<Sports />} />

              {/* Dynamic route for Item component */}
              <Route path='/product/:id' element={<Item />} />

              {/* New routes for Item1 and Item2 components */}
              <Route path='/item1/:id' element={<Item1 />} />
              <Route path='/item2/:id' element={<Item2 />} />

              {/* Route for the cart */}
              <Route path='/cart' element={<Cart cartItems={cartItems} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
