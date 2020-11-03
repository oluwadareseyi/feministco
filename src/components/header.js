import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="header">
    <Link to="/" className="left">
      <img src={require("../images/femco.png")} alt="feminist" />
    </Link>
    <div className="nav-items">
      <div className="home show mb">Home</div>
      <div className="nav-item">About Us</div>
      <div className="nav-item">Account Summary</div>
      <Link to="/endsars" className="nav-item show">
        #EndSARS
      </Link>
      <div className="nav-item">Contact Us</div>
      <div className="nav-item button">Join Us</div>
    </div>
  </header>
)

export default Header
