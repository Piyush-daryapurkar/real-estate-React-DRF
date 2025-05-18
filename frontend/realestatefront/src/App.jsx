import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Property from './Property'
import Nav from './Component/Nav'
import AboutPage from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Home from './Component/Index';
import Serviese from './Component/Serviese';
import PropertyForm from './Component/PropertyForm';

const App = () => {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/property' element={<Property/>}></Route>
          <Route path='/servies' element={<Serviese/>}></Route>
          <Route path='propertyform' element={<PropertyForm/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App