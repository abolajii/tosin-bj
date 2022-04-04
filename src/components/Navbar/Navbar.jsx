import logo from "../../assets/images/liger.png";
import "./Navbar.css";
import { FaGlobeAmericas } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navigator">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img className="navbar-image" src={logo} alt="logo" />
        </div>
        <ul className="navbar-links">
          <li>MUSIC DISTRIBUTION</li>
          <li>BOOST YOUR INCOME</li>
          <li>PROMOTE YOUR MUSIC</li>
          <li>PRICING</li>
          <li>SUPPORT</li>
          <li>LOG IN</li>
          <li>
            <button className="btn btn-success">GET STARTED</button>
          </li>
          <li>
            <FaGlobeAmericas size={30} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
