import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './layouts/Layout';
import HomePage from "./pages/HomePage";
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <Layout>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            {/* Other routes */}
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;