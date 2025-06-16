import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage";
import Layout from './layouts/Layout';





function App() {
  return (
    <Layout>
    <Router>
      <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes here as needed */}
          </Routes>
        <Footer />
      </div>
    </Router>
    </Layout>
  );
}

export default App;