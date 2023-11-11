import logo from './logo.svg';
import './App.css';
import Home from './single_page_application/home.js'; 
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ExperienceDisplay from './single_page_application/components/experience/experiencedisplay';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/experienceDisplay" element={<ExperienceDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
