import Home from './components/home/home-component.jsx';
import Projects from './components/projects/projects-component.js';
import OurTeam from './components/our-team/our-team-component.jsx';
import About from './components/about/about-component.jsx';
import Work from './components/work/work-component.jsx';
import Contact from './components/contact/contact-component.jsx';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/projects/:id' element={<Projects />} exact />
        <Route path='/ourteam' element={<OurTeam />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/work' element={<Work />} exact />
        <Route path='/contact' element={<Contact />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
