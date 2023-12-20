import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

// import { ToastContainer } from 'react-toastify';
// import { alertSuccess } from './services/alertFunctions';

// Components
import Navbar from './components/misc/Navbar';
import Home from './components/pages/Home';
import Cruises from './components/pages/Cruises';
import Destinations from './components/pages/Destinations';
import Activities from './components/pages/Activities';
import Dining from './components/pages/Dining';
import About from './components/pages/About';
import Footer from './components/misc/Footer';
import NotFound from './components/pages/NotFound';
import Search from './components/pages/Search';
import Favorites from './components/pages/Favorites';
import Login from './components/pages/Login';

// App
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cruises' element={<Cruises />} />
        <Route path='/about' element={<About />} />

        <Route path='/destinations' element={<Destinations />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/dining' element={<Dining />} />

        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;