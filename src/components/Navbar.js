import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import styled from 'styled-components'

function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Travelo</h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a className={item.Cname} href={item.url}>
              {item.icon && (
                <i className={item.icon} style={{ marginRight: '8px' }} />
              )}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
