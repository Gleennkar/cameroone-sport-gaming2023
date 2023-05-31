import { Link } from 'react-router-dom';
import pic from '../../images/image-14.png';
// import pic2 from '../../images/Rectangle-15.png';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="nabar">
        {/* <img src={pic2} alt="Rectangle" /> */}
        {/* <Link to="/" className="navbar-logo">
            <img src={pic} alt="Logo" />
          </Link> */}
        <ul className="navbar-container">
          <li>
            <Link to="/" className="navbar-logo">
              <img src={pic} alt="Logo" />
            </Link>
          </li>
          <li>
            <a href="/" className="navbar-a-acc">
              Accueil
            </a>
          </li>
          <li>
            <a href="/propos" className="active">
              A Propos
            </a>
          </li>
          <li>
            <a href="/competitions" className="navbar-a">
              Competitions
            </a>
          </li>
          <li>
            <a href="/programme" className="navbar-a">
              Programme
            </a>
          </li>
          <li>
            <a href="/contact" className="navbar-logo">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
