import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../home/home-component.jsx';
import Projects from '../projects/projects-component.js';
import OurTeam from '../our-team/our-team-component.jsx';
import About from '../about/about-component.jsx';
import Work from '../work/work-component.jsx';
import Contact from '../contact/contact-component.jsx';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} exact />
        <Route path='/projects/:id' element={<Projects />} exact />
        <Route path='/ourteam' element={<OurTeam />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/work' element={<Work />} exact />
        <Route path='/contact' element={<Contact />} exact />
      </Routes>
    </AnimatePresence>
  )
};

export default AnimatedRoutes
