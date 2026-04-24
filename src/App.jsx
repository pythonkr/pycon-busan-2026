import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import { trackPageView } from './lib/analytics';
import Home from './pages/Home';
import Timetable from './pages/Timetable';
import TimetableDetail from './pages/TimetableDetail';
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
import Footer from './components/Footer';
import Goods from './pages/Goods';
import './i18n';
import './App.css';

function AnalyticsListener() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);
  return null;
}

function App() {
  return (
    <Router>
      <AnalyticsListener />
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
            <Route path="/timetable/:code" element={<TimetableDetail />} />
            <Route path="/sprint" element={<Sprint />} />
            <Route path="/lighttalk" element={<LightTalk />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/keynotes" element={<Keynotes />} />
            <Route path="/session" element={<Session />} />
            <Route path="/goods" element={<Goods />} />
            <Route path="/prospectus" element={<Prospectus />} />
            <Route path="/patrons" element={<Patrons />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </main>

      </div>
      <Footer/>
    </Router>
  );
}

export default App;