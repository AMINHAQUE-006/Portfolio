import React, {useState} from 'react'
import "../Header/Header.css"
import { NavLink } from 'react-router-dom'
import logo from "../../assets/headerAssets/logo.png"
import doneHamburger from "../../assets/headerAssets/doneHamburger.svg"
import cutHamburger from "../../assets/headerAssets/cutHamburger.svg"


function Header() {
  const [hamburger, setHamburger] = useState(doneHamburger)

  const hamburgerHandler = () => {
    const navOptions = document.querySelector(".nav-options")
    
    if(hamburger === doneHamburger) {
      setHamburger(cutHamburger)
    } else {
      setHamburger(doneHamburger)
    }


    navOptions.classList.toggle("res-nav-options")
  }

  return (
    <nav>
        <img className='nav-logo' src={logo} alt="Logo" />
        <ul className='nav-options'>
          <li className='nav-link'><NavLink to="/" className="nav-link-item">Home</NavLink></li>
          <li className='nav-link'><NavLink to="/About" className="nav-link-item">Aboout me</NavLink></li>
          <li className='nav-link'><NavLink to="Projects" className="nav-link-item">My Projects</NavLink></li>
          <li className='nav-link'><NavLink to="Contact" className="nav-link-item">Contact me</NavLink></li>
        </ul>
        <img className='hamburger' style={{paddingRight: "10px"}} onClick={hamburgerHandler} src={hamburger} alt="" />
    </nav>
  )
}

export default Header