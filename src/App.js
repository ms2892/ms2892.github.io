// import logo from './logo.svg';
import './App.css';
import Home from './single_page_application/home.js'; 
// import Poem from './single_page_application/merve_puzzles/poem.js'
import Cipher from './single_page_application/merve_puzzles/cipher.js'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ExperienceDisplay from './single_page_application/components/experience/experiencedisplay';
import Vernam from './single_page_application/merve_puzzles/vernam.js';
import RailFence from './single_page_application/merve_puzzles/railfence.js';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/experienceDisplay" element={<ExperienceDisplay />} />
        {/* <Route path="/puzzle_one" element={<Poem />} /> */}
        {/* <Route path="/puzzle_one" element={<Cipher />} />
        <Route path="/puzzle_two" element={<Vernam />} />
        <Route path="/puzzle_three" element={<RailFence />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
