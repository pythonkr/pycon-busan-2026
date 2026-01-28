import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          PyCon Busan 2026
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/timetable" className="navbar-link">
              Timetable
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
