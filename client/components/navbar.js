import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default function Navbar() {
  const links = [
    <a href="#">Github</a>,
    <a href="#">LinkedIn</a>,
    <a href="#">Contact</a>
  ]
  const [navIsOpen, setNavIsOpen] = React.useState(false)

  return (
    <div>
      <nav>
        <div className="logo">
          <h4>Rebecca Bryn</h4>
        </div>
        <ul className={navIsOpen ? 'nav-active nav-links' : 'nav-links'}>
          {links.map((link, index) => (
            <li
              style={
                navIsOpen
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${index / 7 +
                        0.5}s`
                    }
                  : {}
              }
            >
              {link}
            </li>
          ))}
        </ul>
        <div
          className={navIsOpen ? 'burger toggle' : 'burger'}
          onClick={() => {
            setNavIsOpen(!navIsOpen)
          }}
        >
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>
      </nav>
    </div>
  )
}
