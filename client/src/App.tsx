import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { cruiseGetAll, userGetUserInfo } from "./services/dbFunctions";

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
import AdminTools from "./components/pages/AdminTools";

// Context
export const CruiseContext = createContext<any>(null)
export const UserContext = createContext<any>(null)

// App
function App() {
  // States For Context
  const [cruisesData, setCruisesData] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    cruiseGetAll().then((res) => (setCruisesData(res.data)))
  }, [])

  // Check For User On Load
  useEffect(() => {
    if (sessionStorage.getItem("token") != null) {
      // get user info from DB with token
      const token: any = sessionStorage.getItem("token")
      userGetUserInfo(token).then((res) => {
        setUserInfo(res.data)
      })
    }
  }, [])


  return (
    <CruiseContext.Provider value={[cruisesData, setCruisesData]}>
      <UserContext.Provider value={[userInfo, setUserInfo]}>
        <BrowserRouter>
          <ToastContainer />
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

            <Route path='/admintools' element={<AdminTools />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </CruiseContext.Provider>
  );
}

export default App;