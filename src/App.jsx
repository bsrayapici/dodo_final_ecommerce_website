import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";


//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  

  return (
    <Router>
      <Header />
      <PageContent>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here as needed */}
      </Routes>
      </PageContent>
      <Footer />
      </Router>
  )
}

export default App

