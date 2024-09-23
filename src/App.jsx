import './App.css'
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import Home from './pages/Home/Home'
import QuemSouEu from './pages/QuemSouEu/QuemSouEu'
import ProjetosPessoais from './pages/Projetos pessoais/ProjetosPessoais'
import Contato from './pages/Contato/Contato'

function ScrollToSection() {
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if(element) {
        element.scrollIntoView({behavior:"smooth"})
      }
    } 
  }, [hash]);

  return null;
}

function App() {
  return (
    <>
    <Helmet>
    < link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
    </Helmet>
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
              <ProjetosPessoais></ProjetosPessoais>
              <Contato></Contato>
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
