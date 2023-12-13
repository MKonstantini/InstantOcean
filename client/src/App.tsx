import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { alertSuccess } from './services/alertFunctions';

// Components
import Navbar from './components/misc/Navbar';
import Home from './components/pages/Home';
import Footer from './components/misc/Footer';
import NotFound from './components/pages/NotFound';

// App
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;