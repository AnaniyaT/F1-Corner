import { ReactDOM } from 'react';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import Home from './pages/Home.jsx';
import Schedule from './pages/Schedule.jsx';
import Drivers from './pages/Drivers.jsx';
import Constructors from './pages/Constructors.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer';
import Results from './pages/Results.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-full'>
        <BrowserRouter>
          <NavBar></NavBar>
          <div className='max-w-7xl mx-2 xl:mx-auto sm:px-4'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='schedule' element={<Schedule/>}></Route>
              <Route path='drivers' element={<Drivers/>}></Route>
              <Route path='constructors' element={<Constructors/>}></Route>
              <Route path='results' element={<Results/>}></Route>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
  )
}

export default App
