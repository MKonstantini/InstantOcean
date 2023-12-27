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
import { clear } from "console";


// Contexts
// export const CruiseContext = createContext<any>({})
export const LoginContext = createContext<any>(false)
export const AdminContext = createContext<any>(false)

// App
function App() {
  // States
  const [cruisesData, setCruisesData] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  // DB - Get Cruises Data
  useEffect(() => {
    cruiseGetAll().then((res) => (setCruisesData(res.data)))
  }, [])

  // Check For User On Load
  useEffect(() => {
    if (sessionStorage.getItem("token") != null) {
      // get token
      const token: any = sessionStorage.getItem("token")

      // set states
      setIsLoggedIn(true)
      let accountType
      userGetUserInfo(token).then((res) => accountType = res.data.accountType)
      accountType === "admin" ? setIsAdmin(true) : setIsAdmin(false)

    } else {
      // set states
      setIsLoggedIn(false)
      setIsAdmin(false)
    }
  }, [])

  return (
    // <CruiseContext.Provider value={[cruisesData, setCruisesData]}>
    <LoginContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <AdminContext.Provider value={[isAdmin, setIsAdmin]}>
        <BrowserRouter>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home
              cruisesData={cruisesData}
            />} />
            <Route path='/cruises' element={<Cruises
              cruisesData={cruisesData}
            />} />
            <Route path='/about' element={<About />} />

            <Route path='/destinations' element={<Destinations />} />
            <Route path='/activities' element={<Activities />} />
            <Route path='/dining' element={<Dining />} />

            <Route path='/search' element={<Search
              cruisesData={cruisesData}
            />} />
            <Route path='/favorites' element={<Favorites
              cruisesData={cruisesData}
            />} />
            <Route path='/login' element={<Login />} />

            <Route path='/admintools' element={<AdminTools />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AdminContext.Provider>
    </LoginContext.Provider>
    // </CruiseContext.Provider>
  );
}

export default App;