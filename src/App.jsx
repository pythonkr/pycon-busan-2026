import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Timetable from './pages/Timetable';
import Team from './pages/Team';
import Sprint from './pages/Sprint';
import LightTalk from './pages/LightTalk';
import PyConBusan from './pages/PyConBusan';
import Safety from './pages/Safety';
import Conduct from './pages/Conduct';
import Volunteer from './pages/Volunteer';
import Schedule from './pages/Schedule';
import Keynotes from './pages/Keynotes';
import Session from './pages/Session';
import Prospectus from './pages/Prospectus';
import Patrons from './pages/Patrons';
import Tickets from './pages/Tickets';
import Tutorial from './pages/Tutorial';
import Finance from './pages/Finance';
import Footer from './components/Footer';
import "./i18n";


import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pyconbusan" element={<PyConBusan />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/conduct" element={<Conduct />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/team" element={<Team />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/sprint" element={<Sprint />} />
            <Route path="/lighttalk" element={<LightTalk />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/keynotes" element={<Keynotes />} />
            <Route path="/session" element={<Session />} />
            <Route path="/prospectus" element={<Prospectus />} />
            <Route path="/patrons" element={<Patrons />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/finance" element={<Finance />} />
          </Routes>
        </main>

      </div>
      <Footer/>
    </Router>
  );
}

export default App;