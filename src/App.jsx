import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import GalleryDetail from './components/GalleryDetail';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      {<Navbar />}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />\
          <Route path="/resume" element={<Resume />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:slug" element={<GalleryDetail />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
