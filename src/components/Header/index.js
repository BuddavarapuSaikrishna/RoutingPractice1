// Write your JS code here

import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <div className="logo-section">
      <img
        className="wave-logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p className="logo-name">Wave</p>
    </div>
    <div className="links-sections">
      <ul className="list-items">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
