import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // 👈 import Footer
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import UserContext from './components/UserContext';

function App() {
  const user = {
    name: "Alice",
    age: 25,
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Navbar />
        <div style={{ padding: '2rem', minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* 👈 Add Footer here */}
      </Router>
    </UserContext.Provider>
  );
}

export default App;
