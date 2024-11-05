import logo from './logo.svg';
import './App.css';
import Home from './single_page_application/home.js'; 
import Poem from './single_page_application/merve_puzzles/poem.js'
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ExperienceDisplay from './single_page_application/components/experience/experiencedisplay';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/experienceDisplay" element={<ExperienceDisplay />} />
        <Route path="/puzzle_one" element={<Poem />} />
      </Routes>
    </Router>
  );
}

export default App;
