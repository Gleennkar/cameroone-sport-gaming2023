import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Propos from './components/pages/Propos/Propos';
import Competitions from './components/pages/Competitions/Competitions';
import Programme from './components/pages/Programme/Programme';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
