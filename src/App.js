import './App.css';
import 'boxicons/css/boxicons.min.css'; // Importing Boxicons CSS
import Home from './Route/Home';
import Skills from './Route/Skills';
import Contact from './Route/Contact';
import Projects from './Route/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
