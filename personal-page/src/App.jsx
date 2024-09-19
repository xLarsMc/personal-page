import './App.css'
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import Home from './pages/Home/Home'
import QuemSouEu from './pages/QuemSouEu/QuemSouEu'
import { useEffect } from 'react'

function ScrollToSection() {
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if(element) {
        element.scrollIntoView({behavior:"smooth"})
      }
    } else{
      const element = document.getElementById('home');
      element.scrollIntoView({behavior:'smooth'})
    }
  }, [hash], [location]);

  return null;
}

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="container">
          <ScrollToSection></ScrollToSection>
          <Routes>
            <Route path='/' element={
              <>
              <Home></Home>
              <QuemSouEu></QuemSouEu>
              </>
              }></Route>
          </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
