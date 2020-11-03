import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="header">
    <Link to="/" className="left">
      <img src={require("../images/femco.png")} alt="feminist" />
    </Link>
    <div className="nav-items">
      <Link activeClassName="active-link" to="/" className="home show mb">
        Home
      </Link>
      <div className="nav-item hide-end">About Us</div>
      <div className="nav-item hide-end">Account Summary</div>
      <Link
        activeClassName="active-link"
        to="/endsars"
        className="nav-item show"
      >
        #EndSARS
      </Link>
      <div className="nav-item">Contact Us</div>
      <div className="nav-item button">Join Us</div>
    </div>
  </header>
)

export default Header
