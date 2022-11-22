import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

// import components
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Hobbies from './components/pages/Hobbies';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import BackTopBtn from './components/content/BackTopBtn';

const App = () => {

  return (

    <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} > </Route>
            <Route path="/About" element={<About />} > </Route>
            <Route path="/Hobbies" element={<Hobbies />} > </Route>
            <Route path="/Contact" element={<Contact />} > </Route>
            </Routes>
          <Footer/>
          <BackTopBtn />
        </Router>

      </div>
  );
};

export default App;
