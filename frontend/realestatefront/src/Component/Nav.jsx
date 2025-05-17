import { Link } from 'react-router-dom';
import '../style.css';


const Nav = () => (
  <header>
    <nav className="nav-bar">
      <div className="nav-container">
        <Link className="brand" to="/">Real Estate</Link>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/property">Properties</Link></li>
          <li><Link to="/form">Buy/Sell/Rent</Link></li>
          <li><Link to="/pg">PG</Link></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Nav;
