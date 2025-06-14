import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <PageContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes here as needed */}
          </Routes>
        </PageContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;