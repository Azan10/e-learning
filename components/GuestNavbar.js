import { Link } from 'react-router-dom';
import '../styling.css';

function GuestNavbar() {
  return (
    <div className="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <div className="topnav-right">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default GuestNavbar;

