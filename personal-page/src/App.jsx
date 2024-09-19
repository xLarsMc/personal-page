import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import Home from './pages/Home'

function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="container">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
          </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
