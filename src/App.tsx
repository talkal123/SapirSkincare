import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Nav from "./Components/Nav";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import { useState } from "react";

function App() {

  

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
