import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.js" 
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>

    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
