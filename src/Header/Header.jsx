import React from 'react'
import '../Home/Home.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="navbar">
    <nav>
      <ul>
        <li>
          <Link to="/" className="navt">
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navt">
            About
          </Link>
        </li>
        <li>
          <Link to="/project" className="navt">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navt">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Header