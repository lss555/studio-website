
import './App.css';
import { HashRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ClimbingBoxLoader
 from "react-spinners/ClimbingBoxLoader";
import AnimatedRoutes from './components/animated-routes/animated-routes';
import NavBar from './components/navbar/navbar-component.jsx';
import SideBar from './components/sidebar/sidebar.jsx';
import Footer from './components/footer/footer-component.js';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.jsx';

function App() {
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <HashRouter className='App'>
    { loading ? <ClimbingBoxLoader
      className='initialLoader'
      color='#610517'
      loading={loading}
      size={30}
      /> : (
        <div>
          <SideBar isOpen={isOpen} toggle={toggle}/>
          <NavBar toggle={toggle}/>
          <AnimatedRoutes />
          <Footer />
        </div>
    )
      }
      <ScrollToTop />
    </HashRouter>
  );
}

export default App;
