
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ClimbingBoxLoader
 from "react-spinners/ClimbingBoxLoader";
import AnimatedRoutes from './components/animated-routes/animated-routes';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <BrowserRouter className='App'>
    { loading ? <ClimbingBoxLoader
      className='initialLoader'
      color='#610517'
      loading={loading}
      size={30}
      /> :
      <AnimatedRoutes />
      }
    </BrowserRouter>
  );
}

export default App;
