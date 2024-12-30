// import logo from './logo.svg';
import './App.css';
import Home from './single_page_application/home.js'; 
// import Poem from './single_page_application/merve_puzzles/poem.js'
import Cipher from './single_page_application/merve_puzzles/cipher.js'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ExperienceDisplay from './single_page_application/components/experience/experiencedisplay';
import Vernam from './single_page_application/merve_puzzles/vernam.js';
import RailFence from './single_page_application/merve_puzzles/railfence.js';
import Columnar from './single_page_application/merve_puzzles/columnar.js';
import Merve from './single_page_application/merve_puzzles/merve.js';
import Final from './single_page_application/merve_puzzles/final.js'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/experienceDisplay" element={<ExperienceDisplay />} />
        <Route path="/3104ca20" element={<Cipher />} />
        <Route path="/40c8f313" element={<Vernam />} />
        <Route path="/95e0227a" element={<RailFence />} />
        <Route path="/9c861abc" element={<Columnar />} />
        <Route path='/58baa610' element={<Merve />} />
        <Route path='/c9eb9e55' element={<Final />} />
      </Routes>
    </Router>
  );
}

export default App;
