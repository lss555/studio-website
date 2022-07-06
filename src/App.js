import Home from './components/home/home-component.jsx';
import Projects from './components/projects/projects-component.js';
import './App.css';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

// function ProjectPage() {
//   let { projectId } = useParams();
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/projects/:id' element={<Projects />} exact />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
